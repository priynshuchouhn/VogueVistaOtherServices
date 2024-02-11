const dotenv = require('dotenv')
const { Worker } = require('bullmq');
const transporter = require('../utils/transporter');
dotenv.config()


const emailWorker = new Worker('email-queue', async (job) => {
  const data = job.data;
  console.log('JOB RECIEVED', job.id);
  await transporter.sendMail(data, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('JOB COMPLETED...')
  });

}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  }
})  

module.exports = emailWorker;