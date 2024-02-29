const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Service running at "+ PORT);
})
app.get('/', (req,res,next)=>{
    res.send('Server Started');
})
const emailWorker = require('./queues/email-queue');
console.log('Service is running....');