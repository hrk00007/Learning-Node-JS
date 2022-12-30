//importing modules
const express = require('express');
const path = require('path');


const app = express();
//setting public directory path into variable
const publicPath = path.join(__dirname, 'public')

//setting template engine
app.set('view engine','ejs')

app.get('/login',(req,res)=>{
  res.render('login')
})

app.get('/profile',(req,res)=>{
    const user={
        name:"hritik manbattulwar",
        age:22,
        sal:8000,
        addr:"Hyderabad",
        skills:['c','c++','java','mysql','oracle','spring','spring boot','css','javascript']
    }
  res.render('profile',{user})
})


app.listen(5000)