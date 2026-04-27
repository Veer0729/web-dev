const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "email is required for creating a user"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address"],
        unique: [true, "emial already exist"]
    },
    name: {
        type: String,
        required: [true, "Name is required for creating an account"]
    },
    password: {
        type: String,
        required: [true, "password is required for account"],
        minlength: [6, "password should be containing more characters"],
        select: false
    },
    systemUser: {
        type: Boolean,
        default: false,
        immutable: true,
        select: false
    }
})

userSchema.pre("save", async function () {

    if (!this.isModified("password")){ // is the user's password is not modified
        return 
    }

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    return
    
})

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password)

}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel

