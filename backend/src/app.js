// this file is used to create the server
const express = require("express")
const app = express()
const noteModel = require("./models/note.model")




//      METHODS

// app.use((express.json()))
// const notes = []

// app.post("/notes", (req, res) => {
//     notes.push(req.body)
//     res.status(201).json({
//         message: "note was created succesfully"
//     })
// })

// app.get("/notes", (req, res) => {
//     res.status(200).json({
//         message: "notes fetched succesfully",
//         notes:notes
//     })
// })

// app.delete("/notes/:index", (req, res) => {

//     const index = req.params.index // for our index we want to delete

//     delete notes[index] // delete the index

//     res.status(200).json({
//         message: "notes deleted succesfully"
//     })
// })

// app.patch("/notes/:index", (req, res) => {
//     const index = req.params.index
//     const description = req.body.description

//     notes[index].description = description

//     res.status(200).json({
//         message: "new info added"
//     })
// })

//    DATABASE

app.use(express.json());

app.post("/notes",async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "note created"
    })
})

app.get("/notes",async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "notes fetched",
        notes:notes
    })
})

app.delete("/notes/:id", async (req, res) => {
     const id= req.params.id 

     await noteModel.findByIdAndDelete({
        _id: id
     })

     res.status(200).json({
        message: "note deleted"
     })

})

app.patch("/notes/:id", async (req, res) =>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findByIdAndUpdate({_id:id}, {description: description})

    res.status(200).json({
        message: "note updated"
    })
})



module.exports = app