require("dotenv").config()
const app = require("./app")

const connecttoDB = require("./config/db")

connecttoDB()

app.listen(3000, ()=>{
    console.log("server is running")
})