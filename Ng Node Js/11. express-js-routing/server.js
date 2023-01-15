const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static('public'))

app.use('/', require('./router/apiRouter'))

app.listen(5000);