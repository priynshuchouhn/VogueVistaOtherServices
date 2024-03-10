const express = require('express');
const db = require('./utils/db');
const webpush = require('web-push');


const app = express();
const PORT = process.env.PORT || 3001

db().then(res => {
    app.listen(PORT, ()=>{
        console.log("Service running at "+ PORT);
       
    })
});
app.get('/', (req,res,next)=>{
    res.send('Server Started');
})
app.get('/notify', (req,res,next)=>{
    sendMessageToAll();
    res.send('Message send to all users');
})
const emailWorker = require('./queues/email-queue');
console.log('Service is running....');

