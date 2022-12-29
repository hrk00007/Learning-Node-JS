const fs= require('fs');
const path=require('path');
const dirPath= path.join(__dirname, 'crud'); //D:\WEB Development\Learning Node JS\9. CRUD with file system\crud
const filePath=`${dirPath}/file1.txt`;

//CREATE A FILE
fs.writeFileSync(`${filePath}`,"This is text inside of that file")

 //READ A FILE
fs.readFile(filePath,'utf-8',(err,item)=>{
    console.log(item);
}) 



//APPEND A FILE
fs.appendFile(filePath," this is the text which will be appended to fil1.txt",(err)=>{
    if(!err){
    console.log("file is updated")
    }
}) 


 //RENAME A FILE
fs.rename(filePath,`${dirPath}/renameFile.txt`,(err)=>{
    if(!err){
    console.log("file is renamed")
    }
})
 

//DELETE A FILE
fs.unlinkSync(`${dirPath}/renameFile.txt`); 