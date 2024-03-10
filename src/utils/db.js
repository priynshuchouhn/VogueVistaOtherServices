const mongoose =  require('mongoose');
const dotenv = require('dotenv');
const sendMessageToAll = require('../utils/push-notification');

dotenv.config();

 
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL
       await mongoose.connect(uri)
        console.log("Connection to database is successful")
        sendMessageToAll();
    } catch (error) {
        console.log("Connection to database is unsuccessful", error);   
    }
}

module.exports = connectDB;