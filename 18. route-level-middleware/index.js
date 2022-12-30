const express = require('express');
const middleware = require('./middleware')
const path = require('path');


const app = express();
const route=express.Router();


//setting the middleware for every route(for every request)
// app.use(reqFilter);

route.use(reqFilter)
app.get('/home',(req,resp)=>{
    resp.send('Welcome to Home Page')
})
route.get('/about',(req,resp)=>{
    resp.send('Welcome to About US Page')
})
route.get('/contact',(req,resp)=>{
    resp.send('Welcome to Contact Page')
})

app.use('/',route)
app.listen(5000)