// express js

const express = require("express")
const morgan = require("morgan")
const app = express()
const userModel = require("./models/user")
const dbConnection = require("./config/db")

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// app.get("/", (req, res) =>{
//     res.send("hello world")
// })


// app.use((req, res, next) => {
//     console.log("this is middleware")

//     const a = 4
//     const b = 7

//     console.log(a+b)

//     return next()
// })

// ejs

app.set("view engine", "ejs")

// app.get("/", (req, res, next) => {
//     const a = 5
//     const b = 9

//     console.log(a + b)

//     next()
// }, (req, res) => {
//         res.render("index")
// })

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register",async (req, res) =>{
    const {username, email, password} = req.body

    await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send("user registered")
})

app.get("/find-user", (req, res) => {
    userModel.find({
        username:"sdcsdv"
    }).then((users) =>{
        res.send(users)
    })
})
// can also use findOne other than find if we want to find one user 

app.get("/find-and-update", async (req, res) => {
    await userModel.findOneAndUpdate({
        username:"sdcsdv"
    }, {
        username: "veer"
    })
})

app.get("/find-and-delete", async (req, res) => {
    await userModel.findOneAndDelete({
        username: "veer"
    })
})

// app.get('/get-form-data', (req, res) => {
//     console.log(req.query)
//     res.send("data received")
// })
// this works but the password and the ifos can be seen in the frontend

// app.post('/get-form-data', (req, res) => {
//     console.log(req.body)
//     res.send("data received")
// })

app.listen(3000)