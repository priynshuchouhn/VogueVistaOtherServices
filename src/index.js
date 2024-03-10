const express = require('express');
const db = require('./utils/db');
const webpush = require('web-push');


const app = express();
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log("Service running at "+ PORT);
    db();

})
app.get('/', (req,res,next)=>{
    res.send('Server Started');
})
const emailWorker = require('./queues/email-queue');
console.log('Service is running....');

