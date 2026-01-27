// to create a server in backend

const http = require("http")
const server = http.createServer((req, res) =>{
    if (req.url == "/about"){
        res.end("this is the about page")
    }

    if (req.url == "/profile"){
        res.end("this is the profile page")
    }

    if(req.url == "/"){
        res.end("home page")
    }
})


server.listen(3000)