
const express=require('express');


const app=express();
const path=require('path');

const publicPath=path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/events',(req,res)=>{
    res.sendFile(`${publicPath}/events.html`);
})
app.get('/blogs',(req,res)=>{
    res.sendFile(`${publicPath}/blog.html`);
})
app.get('/contact',(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/services',(req,res)=>{
    res.sendFile(`${publicPath}/services.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
})
app.listen(5000)