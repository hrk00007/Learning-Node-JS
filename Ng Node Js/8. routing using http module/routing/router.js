const fs = require('fs')
const path = require('path');

let mapRoutes = (request, response) => {
    if (request.url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        fs.readFile(path.join(__dirname, '..', 'views', 'index.html'), (err, data) => {
            if (err) throw err;
            response.end(data)
        })
    }
    else if (request.url === '/about') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        fs.readFile(path.join(__dirname, '..', 'views', 'about.html'), (err, data) => {
            if (err) throw err;
            response.end(data)
        })
    }
    else if (request.url === '/services') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        fs.readFile(path.join(__dirname, '..', 'views', 'services.html'), (err, data) => {
            if (err) throw err;
            response.end(data)
        })
    }
    else if (request.url === '/contact') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        fs.readFile(path.join(__dirname, '..', 'views', 'contact.html'), (err, data) => {
            if (err) throw err;
            response.end(data)
        })
    }
    else {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        fs.readFile(path.join(__dirname, '..', 'views', '404.html'), (err, data) => {
            if (err) throw err;
            response.end(data)
        })
    }
}


module.exports = mapRoutes;