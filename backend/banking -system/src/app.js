const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionsroutes = require("./routes/transcations.routes")

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("banking system is up and running")
})
app.use("/api/auth",authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionsroutes)

module.exports = app