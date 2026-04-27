const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")
const emailService = require("../services/email.service")
const accountModel = require("../models/account.model")
const mongoose = require("mongoose")

async function createTransaction(req, res,){
    const {fromAccount, toAccount, amount, idempotencyKey } = req.body // get this data from request

    if (!toAccount || !amount || !idempotencyKey){ // if even one of these are not given
        return res.status(401).json({
            message: "account, amount and idempotency key are required"
        })
    }

    const fromUserAccount = await accountModel.findOne({ // fetch sender account
        _id: fromAccount
    })

    const toUserAccount = await accountModel.findOne({ // fetch the receiver's account
        _id: toAccount
    })

    if (!fromUserAccount || !toUserAccount){ // if both are not availabe
        return res.status(400).json({
            message: "invalid fromaccount or toaccount"
        })
    }

    const doesTransactionExists = await transactionModel.findOne({ // if this transaction already exists
        idempotencyKey: idempotencyKey
    })

    if(doesTransactionExists){ // checks the status
        if(doesTransactionExists.status == "COMPLETED"){
            return res.status(200).json({
                message: "transction already processed",
                transaction: doesTransactionExists
            })
        }
        if(doesTransactionExists.status == "PENDING"){
            return res.status(200).json({
                message: "transction is being processed"
            })
        }
        if(doesTransactionExists.status == "FAILED"){
            return res.status(500).json({
                message: "transction has failed"
            })
        }
        if(doesTransactionExists.status == "REVERSED"){
            return res.status(500).json({
                message: "transction has been reverted back"
            })
        }
    }

    if(fromUserAccount.status !== "ACTIVE" || toUserAccount.status !== "ACTIVE"){ // only active accounts can transact
        return res.status(400).json({
            message: "both the sender and the getter account should be active"
        })
    }

    const balance = await fromUserAccount.getBalance() // retrives balance

    if (balance < amount){
        return res.status(400).json({
            message: "not sufficient balance"
        })
    }

    let transaction
    try{
        const session = await mongoose.startSession() // either all steps happn or none will
        session.startTransaction()

        const transaction = await transactionModel.create({ // creates a transction
            fromAccount,
            toAccount,
            amount,
            idempotencyKey,
            status: "PENDING"
        }, {session})[0]

        const debitLedgerEntry = await ledgerModel.create([{ // debit entry
            account: fromAccount,
            amount: amount,
            transaction: transaction._id,
            type: "DEBIT"
        }], {session})

        await (() => {
            return new Promise((resolve) => setTimeout(resolve, 10 * 1000))
        })
        
        const creditLedgerEntry = await ledgerModel.create([{ // credit entry
            account: toAccount,
            amount: amount,
            transaction: transaction._id,
            type: "CREDIT"
        }], {session})

        transaction.status = "COMPLETED" // transaction completed
        await transaction.save({session})

        await session.commitTransaction()
        session.endSession()

    }catch(error){ // for some error
        return res.status(400).json({
            message: "transaction is pending, please try again later"
        })
    }

     return res.status(201).json({
        message: "Transaction completed successfully",
        transaction: transaction
    })

    await emailService.sendTransactionEmail(req.user.email, req.user.name, amount, toAccount) // sends email
}

async function createInitalFundsTransaction(req, res) {
    const { toAccount, amount, idempotencyKey } = req.body

    if (!toAccount || !amount || !idempotencyKey) {
        return res.status(401).json({
            message: "account, amount and idempotency key are required"
        })
    }

    const toUserAccount = await accountModel.findById(toAccount)

    if (!toUserAccount) {
        return res.status(400).json({
            message: "invalid account"
        })
    }

    const fromUserAccount = await accountModel.findOne({
        user: req.user._id
    })

    if (!fromUserAccount) {
        return res.status(400).json({
            message: "System account not found"
        })
    }

    const session = await mongoose.startSession()

    try {
        session.startTransaction()

        const [transaction] = await transactionModel.create([{
            fromAccount: fromUserAccount._id,
            toAccount,
            amount,
            idempotencyKey,
            status: "PENDING"
        }], { session })

        await ledgerModel.create([{
            account: fromUserAccount._id,
            amount,
            transaction: transaction._id,
            type: "DEBIT"
        }], { session })

        await ledgerModel.create([{
            account: toAccount,
            amount,
            transaction: transaction._id,
            type: "CREDIT"
        }], { session })

        transaction.status = "COMPLETED"
        await transaction.save({ session })

        await session.commitTransaction()
        session.endSession()

        return res.status(201).json({
            message: "initial fund transfer complete",
            transaction
        })

    } catch (error) {
        console.log(error)
        await session.abortTransaction()
        session.endSession()

        return res.status(500).json({
            message: "transaction failed"
        })
    }
}

module.exports = {
    createTransaction,
    createInitalFundsTransaction
}