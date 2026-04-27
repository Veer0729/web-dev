const accountModel = require("../models/account.model") // gives access from account collection in mongodb

async function createAccountController(req, res){ // req to create an account for the user
    const user = req.user

    const account = await accountModel.create({ // creates a new account and save in the db
        user: user._id
    })

    res.status(201).json({
        account
    })
}

async function getUserAccountsController(req, res){ // fetches all the account of the logged in user
    const accounts = await accountModel.find({ user: req.user._id})

    res.status(200).json({
        accounts
    })
}

async function getbalanceController(req,res){ // see the balance in the account
    const {accountId} = req.params;

    const account = await accountModel.findOne({ // checks the the account user is asking
        _id: accountId, // does this account exists
        user: req.user._id // is this the logged in user's account
    })

    if (!account){ // if not then..
        return res.status(404).json({
            message: "account not found"
        })
    }

    const getBalance = await account.getBalance() // if this is then show him the balance

    res.status(200).json({
        accountId: account._id, // account id the user requested
        balance: getBalance // his balance
    });
}

module.exports = {
    createAccountController,
    getUserAccountsController,
    getbalanceController
}