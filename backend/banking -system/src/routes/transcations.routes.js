const {Router} = require("express")
const { authMiddleware } = require("../middleware/auth.middleware")
const transactionController = require("../controllers/transaction.controller")

const transactionsroutes = Router()

transactionsroutes.post("/", authMiddleware, transactionController.createTransaction)
transactionsroutes.post("/system/initial-funds", authMiddleware, transactionController.createInitalFundsTransaction)

module.exports = transactionsroutes