const mongoose = require('mongoose');


const pushNotificationSubscription = new mongoose.Schema({
    endpoint: { type: String, required: true },
    keys: {
        auth: { type: String, required: true },
        p256dh: { type: String, required: true }
    },
});

const PushNotificationSubscription = mongoose.model('push_notification_subscription', pushNotificationSubscription);

module.exports = PushNotificationSubscription;