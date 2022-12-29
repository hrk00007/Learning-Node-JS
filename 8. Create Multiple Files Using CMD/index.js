const fs = require('fs');
const path=require('path');     //path modules will provide utilities for working with files and directories paths.
const dirPath=path.join(__dirname, 'files');  //using path for finding current directory

// //this loop will create a new file every time
// for(i=0;i<5;i++){ 
//     fs.writeFileSync(`${dirPath}/CodeHeist${i}.txt`,"A new File is created"); 
//                     //D:\WEB Development\Learning Node JS\8. Create Multiple Files Using CMD\files\codeheist{i}.txt
//                     //"A new File is created" will be written on every file
// }


//We are not reading a file we are reading a directory
fs.readdir(dirPath,(error,files)=>{
    console.log(files); //['CodeHeist0.txt','CodeHeist1.txt','CodeHeist2.txt','CodeHeist3.txt','CodeHeist4.txt']
    files.forEach((item)=>{
        console.log("file Name is :",item)
    })
})