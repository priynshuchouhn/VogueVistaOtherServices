// import mongoose, { model } from "mongoose";
const mongoose = require('mongoose');

const pushNotification = new mongoose.Schema({
    title: {type: String, required: true, },
    body : {type: String, required: true, },
})

const PushNotificationMessage = mongoose.model('push_notification_message', pushNotification);

module.exports = PushNotificationMessage;