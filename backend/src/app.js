// this file is used to create the server
const express = require("express")
const app = express()
app.use((express.json()))

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "note was created succesfully"
    })
})

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "notes fetched succesfully",
        notes:notes
    })
})

app.delete("/notes/:index", (req, res) => {

    const index = req.params.index // for our index we want to delete

    delete notes[index] // delete the index

    res.status(200).json({
        message: "notes deleted succesfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "new info added"
    })
})

module.exports = app