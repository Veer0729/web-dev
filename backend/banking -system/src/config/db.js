const mongoose = require("mongoose") // connect mongodb database

function connecttoDb(){ // connects with it
    mongoose.connect(process.env.MONGODB_URI) // connects locally
    .then(()=>{
        console.log("server is connected to db") // properly connected
    })
    .catch(err =>{
        console.log(err, "error connecting to db") // not connected
        process.exit(1)
    })
}

module.exports = connecttoDb