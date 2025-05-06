require('dotenv').config();
const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

const validRoutes = ['home', 'about', 'contact'];

app.get(['/', '/:page'], (req, res) => {
    const page = req.params.page || 'home';

    if(validRoutes.includes(page)){
        return res.sendFile(path.join(__dirname, `${page}.html`));
    }

    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`))