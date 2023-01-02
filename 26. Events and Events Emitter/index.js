const express= require('express');
const EventEmitter = require('node:events');


const app = express();
const event = new EventEmitter();

let count=0;

event.on("countAPI",()=>{
    count++;
    console.log("Event Called",count);
})

app.get('/', (req, res) =>{
   res.send("Get api Called")
   event.emit("countAPI");
});

app.get('/search', (req, res) =>{
   res.send("Search api Called")
   event.emit("countAPI");
});

app.get('/update', (req, res) =>{
   res.send("Update api Called")
   event.emit("countAPI");
});

app.get('/delete', (req, res) =>{
   res.send("Delete api Called")
   event.emit("countAPI");
});

app.listen(5000);
