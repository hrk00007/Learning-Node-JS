const express = require('express');
const path = require('path');

const app = express();

//creating a middleware function
const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("PLEASE PROVIDE IN REQUEST PARAMETER")
    }
    if(req.query.age<18){
        resp.send("Sorry you are not allowed to go there WATCH POGO TV")
    }
    else{
        next();
    }
}

//setting the middleware for every route(for every request)
app.use(reqFilter);


app.get('',(req,resp)=>{
    resp.send('Welcome to Home Page')
})
app.get('/about',(req,resp)=>{
    resp.send('Welcome to About US Page')
})
app.get('/contact',(req,resp)=>{
    resp.send('Welcome to Contact Page')
})

app.listen(5000)