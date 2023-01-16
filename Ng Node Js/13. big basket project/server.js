const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//configure env file
dotenv.config({ path: './config/config.env' })

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('<h2>Welcome to Big Basket</h2>')
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response) => {
    console.log('connected to Mongo')
}).catch((error) => {
    console.log(error);
    process.exit(1);//stop the nodejs server if we can't connect to mongodb
})

app.use('/api', require('./router/apiRouter'))



app.listen(port, hostname, () => {
    console.log(`server started at  http://${hostname}:${5000}`);
})
