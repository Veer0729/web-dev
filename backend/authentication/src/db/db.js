const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("data base connected")
    }catch(err){
        console.log("database connection error:", err)
    }
}

module.exports = connectDB