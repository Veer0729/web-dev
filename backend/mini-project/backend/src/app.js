const express = require("express")
const multer = require("multer") // middleware used to handle file uploads (images, PDFs, videos, etc.)
const uploadFile = require("./services/storage.services")
const postModel = require("./models/post.models")

const app = express();
app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req, res) => {
    console.log(req.body);
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "post created",
        post
    })
})

app.get("/posts", async (req, res) => {
    
    const post = await postModel.find()

    return res.status(200).json({
        message: "post fetched",
        post
    })
})

module.exports = app;