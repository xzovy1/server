const dotenv = require('dotenv').config();
const express = require('express')
const path = require('path')

const app = express();
const PORT = dotenv.parsed.PATH || 8080;

app.get(["/", '/:name'], (req, res) => {
    console.log(res)
    if(req.params.name == undefined)return res.sendFile(__dirname + '/home.html')
    else if(req.params.name == 'contact' || req.params.name == 'about'){
        res.sendFile(__dirname + '/' + req.params.name + '.html')
    }else {
        res.sendFile(__dirname + '/404.html')
    }
    
})
// app.get("/", (req, res) => res.sendFile(__dirname + '/home.html'))
// app.get("/about", (req, res) => res.sendFile(__dirname + '/about.html'))
// app.get("/contact", (req, res) => res.sendFile(__dirname + '/contact.html'))


app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`))