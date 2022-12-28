console.log("Hello world!"); //console  is a modules which is present(global object) we do not need to import.

const file=require('fs'); //fs is a core module we need to import if we want to use file handling.
file.writeFileSync("abc.txt","Hello world!"); //abc.txt is not present so it will create abc.txt and write "Hello world!"
