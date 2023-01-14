const http = require('http')

const mapRoutes = require('./routing/router');

const server = http.createServer((request, response) => {
    console.log(request.url);
    mapRoutes(request, response)
});


server.listen(5000, '127.0.0.1', () => {
    console.log('server started ')
})