const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(5000);