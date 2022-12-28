const http=require('http');
http.createServer(
    (req,res)=>{
        //res.write("Hello, world!");
        res.write("<h1>Hello, world!</h1>");
        res.end();
    }
).listen(4500);