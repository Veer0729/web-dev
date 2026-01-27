const express = require("express");
const router = express.Router()
const {body, validationResult} = require('express-validator')
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jswt = require("jsonwebtoken")

router.get("/test-router", (req, res) =>{
    res.send("router testing");
})

router.get("/register", (req, res) =>{
    res.render("register");
})

router.post('/register',
  body('email').trim().isEmail().isLength({ min: 5 }),
  body('password').trim().isLength({ min: 5 }),
  body('username').trim().isLength({ min: 3 }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "invalid data"
      })
    }

    const {email, first_name, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({
      email,
      first_name,
      password: hashPassword
    })

    res.json(newUser)

  }
);

router.get("/login", (req, res) =>{
    res.render("router logged in");
})

router.post('/login',
  body('email').trim().isEmail().isLength({ min: 5 }),
  body('password').trim().isLength({ min: 5 }),
  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "invalid data"
      })
    }

    const {email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await userModel.find({
      email: email
    })

    if(!user){
      return res.status(400).json({
        message: "username or password is incorrect"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
      return res.status(400).json({
        message: "username or password is incorrect"
      })
    }

    const token = jwt.sign({
      userId: user._id,
      email: user.email,
      username: user.username
    }, process.env.JWT_SECRET,
  )

    res.cookie("token", token)
    res.send("logged in") 
  }
);

module.exports = router;
