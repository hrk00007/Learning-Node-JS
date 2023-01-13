const dotenv = require('dotenv')

//configure dotenv
dotenv.config({ path: './config.env' })

//JWT Secret Key
console.log(`JWT Secret Key: ${process.env.JWT_SECRET_KEY}`);
console.log(`Dev Server Url: ${process.env.DEV_SERVER_URL}`);
console.log(`Mongo local dev: ${process.env.MONGODB_LOCAL_DEV}`);
console.log(`port: ${process.env.PORT}`);
console.log(`host: ${process.env.HOST}`);
console.log(`username: ${process.env.username}`);
console.log(`password: ${process.env.password}`);