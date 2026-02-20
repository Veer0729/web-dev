const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router();

router.post("/register", authController.registerUser)

router.post("/loginUser", authController.loginUser)
router.post("/logoutUser", authController.logoutUser)

module.exports = router