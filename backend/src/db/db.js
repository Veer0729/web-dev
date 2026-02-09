const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend:DQCEwxD2SgmNbdZY@backend.c7hwiyc.mongodb.net/veer")
    // await means to wait until db is connected
    console.log("connected to db")
}

module.exports = connectDB