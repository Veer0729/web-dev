const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

async function authMiddleware(req, res, next){
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1] // token extractor

    if(!token){
        return res.status(401).json({
            message: "Unauthorized access, token not found"
        })
    }

    const tokenBlacklisted = await tokenBlacklistModel.findOne({token})

    if (tokenBlacklisted){ // if token blacklisted then user is already logged out
        return res.status(401).json({
            message: "unauthorised access, token invlaid"
        })
    }

    try { // if not blacklisted

        const decoded = jwt.verify(token, process.env.JWT_SECRET) // decodes the token

        const user = await userModel.findById(decoded.userId) // finds the user

        req.user = user // the user is not our requested one

        return next()
        
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorised access, invalid token"
        })
    }

}

async function systemAuthMiddleware(req, res, next){  // for system account  
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({
            message: "Unauthorized access, token not found"
        })
    }

    const tokenBlacklisted = await tokenBlacklistModel.findOne({token})

    if (tokenBlacklisted){
        return res.status(401).json({
            message: "unauthorised access, token invalid"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.userId).select("+systemUser")
        if(!user.systemUser){
            return res.status(403).json({
                message: "not a system user"
            })
        }

        req.user = user

        return next()
    }
    catch(err){
        return res.status(401).json({
            message: "unauthorised, token invalid"
        })
    }
}

module.exports = {
    authMiddleware,
    systemAuthMiddleware
}