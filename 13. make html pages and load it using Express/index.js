//importing modules
const express = require('express');
const path = require('path');


//creater directory variables
const app = express();
const publicPath = path.join(__dirname, 'public');//D:\WEB Development\Learning Node JS\13. make html pages and load it using Express\public 

app.use(express.static(publicPath));

app.listen(5000);
