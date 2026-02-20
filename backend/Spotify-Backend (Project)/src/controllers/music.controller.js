const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const { uploadFile } = require("../services/storage.service")
const albumModel = require("../models/album.model");
const { decode } = require("jsonwebtoken");

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "music created",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: req.user.id,
        }
    })
}

async function createAlbum(req, res) {
    const { title, musicIds } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        music: musicIds,
    })

    res.status(201).json({
        message: "album created succesfully",
        album: {
            id: album._id,
            title: album.title,
            artist: req.user.id,
            music: album.music,
        }
    })

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role != "artist") {
            return res.status(403).json({ message: "forbidden" })
        }
    } catch (err) {
        return res.status(401).json({ message: "unauthorized" })
    }
}

async function getAllMusic(req, res) {
    const music = await musicModel.find().limit(1)

    res.status(200).json({
        message: "fetched succesfully",
        music: music
    })
}

async function getAllAlbums(req, res) {

    const albums = await albumModel.find().select("title artist").populate("artist", "username email")

    res.status(200).json({
        message: "Albums fetched successfully",
        albums: albums,
    })

}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbums }