const path = require('path')
const express = require('express');
const router = express.Router();


//  / -> home
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
//home
router.get('/home', (req, res) => {
    res.redirect('/')
})

//about
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
})
//contact
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'))
})
//services
router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'services.html'))
})
//404
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'))
})

module.exports = router;