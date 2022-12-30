//creating a middleware function
module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("PLEASE PROVIDE IN REQUEST PARAMETER")
    }
    else if(req.query.age<18){
        resp.send("Sorry you are not allowed to go there WATCH POGO TV")
    }
    else{
        next();
    }
}
