import http from 'node:http';
import fs from 'node:fs';

const PORT = 8080;

const server = http.createServer((req, res)=>{
    
    if(req.url == '/'){
        res.setHeader('Location', '/home.html');
        req.url = '/home.html';
    }
    
    let fileName = "." + req.url;

    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err){
            fs.readFile('./404.html', (err404, data404) => {
                if(err404){
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end('404 Not Found');
                }
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end(data404);
            })
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            res.write(data);
            return res.end();
        }
    })
})

server.listen(PORT ,()=> console.log(`Server running at http://localhost:${PORT}`))