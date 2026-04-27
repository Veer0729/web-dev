const userModel = require("../models/user.model") // interacts with user's db
const jwt = require("jsonwebtoken") // authetication tokens
const emailService = require("../services/email.service") // email sending service
const tokenBlacklistModel = require("../models/blacklist.model") // blacklisted token (for logout)

async function userRegisterController(req, res){ // when user registers
    const {email, password, name, systemUser} = req.body // gets user's info

    const isExists = await userModel.findOne({ // checks if the emails is being already used
        email: email
    })

    if (isExists) { // if it does then an error
        return res.status(422).json({
            message: "user already exist with this email"
        })
    }

    const user = await userModel.create({ // if it dosent a account gets created
        email, password, name, systemUser: systemUser === true // a bug (i am making a system user field for me but anyone else can also make it if they know the backend of this)
    })

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"}) // creates a token for our user when he is logged in

    res.cookie("token", token) // browsers saves our token


    res.status(201).json({ // account created
        user:{
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })

    await emailService.sendRegestrationEmail(user.email, user.name) // sends an email to the registered email
}

async function userLoginController(req, res){ // when logging in
    const {email, password} = req.body // takes users email and password

    const user = await userModel.findOne({ email }).select("+password") // from the db searches for user's email and password
    // password is hidden so we include it externally 

    if (!user){ // if no email found
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isValid = await user.comparePassword(password) // compares password is user is found

    if (!isValid){ // password incorrect
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"}) // if user and password correct generate a token

    res.cookie("token", token) // save it in browser

    res.status(200).json({
        user:{
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })

}

async function userLogoutController(req, res) { // when user's log out
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1] // fetched cookie token

    if (!token){ // if there's no token then user have already logged out
        return res.status(200).json({
            message: "user logged out"
        })
    }

    res.clearCookie("token", "") // clear the cookie to remove token

    await tokenBlacklistModel.create({ // store it in token blacklist model
        token: token
    })

    res.status(200).json({
        message: "logged out succesfully"
    })
}

module.exports = {
    userRegisterController, userLoginController, userLogoutController
}