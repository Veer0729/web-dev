const express = require("express")
const router = express.Router()
const musicControllers = require("../controllers/music.controller")
const authMiddleware = require("../middlewares/auth.middlewares")
const multer = require("multer")

const upload = multer({
    storage: multer.memoryStorage()
})


router.post("/upload",authMiddleware.authArtist, upload.single("music"), musicControllers.createMusic)

router.post("/album",authMiddleware.authArtist, musicControllers.createAlbum)

router.get("/", authMiddleware.authUser, musicControllers.getAllMusic)
router.get("/albums", authMiddleware.authUser, musicControllers.getAllAlbums)

module.exports = router