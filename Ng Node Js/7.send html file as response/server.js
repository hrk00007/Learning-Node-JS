const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, path.join('views', 'index.html')), (err, data) => {
        if (err) throw err;
        response.end(data)
    })
})


server.listen(5000, '127.0.0.1', () => {
    console.log('server listening on port 5000')
})