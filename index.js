import http from 'node:http';
import fs from 'node:fs';
import url from 'url';
import path from 'path';

const PORT = 5000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

const server = http.createServer((req, res)=>{
    let fileName = "." + req.url;
    
    fs.readFile(fileName, 'utf-8', (err, data) => {
        fs.link('/', 'home.html')
        console.log(req.url)
        if(err){
            fileName = './404.html' 
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404')
            return res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    })
})

server.listen(PORT ,()=> console.log(`Server running at http://localhost:${PORT}`))