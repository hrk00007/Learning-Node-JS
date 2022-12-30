const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    res.send("Hello, "+req.query.name);
})
/* app.get('',(req,res)=>{
    res.send("Hello Home Page");
}) */

app.get('/about',(req,res)=>{
    res.send("Hello About Page");
})

app.get('/contact',(req,res)=>{
    res.send("Hello Contact Page");
})

app.listen(5000);