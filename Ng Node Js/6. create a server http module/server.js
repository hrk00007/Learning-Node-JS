const http = require('http')

const port = 5000;
const hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
    // response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end(`<h2 style="color:white; background-color:aqua">Welcome to Node js server</h2>`)

})

server.listen(port, hostname, () => {
    console.log(`Node Server started at http://${hostname}:${port}`);
})