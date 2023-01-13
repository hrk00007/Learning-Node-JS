const os = require('os');

console.log(`Home directory: ${os.homedir()}`);
console.log(`RAM Size: ${os.totalmem()}`);
console.log(`FREE Size: ${os.freemem()}`);
console.log(`User: ${os.userInfo().username}`);
console.log(`Arch: ${os.arch()}`);
console.log(`Arch: ${os.machine()}`);
