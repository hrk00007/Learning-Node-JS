const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use('/employee', require('./router/employeeRouter'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(5000);