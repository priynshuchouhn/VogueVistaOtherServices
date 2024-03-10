const PushNotificationMessage = require('../models/push-notification');
const PushNotificationSubscription = require('../models/push-notification-subscription');

const getNotificationMessages = async () => {
    const randomMsg = await PushNotificationMessage.aggregate([
        { $sample: { size: 1 } },
        { $project: { _id: 0, __v: 0 } }
    ]);
    return randomMsg[0];
}
const getSubscriptionList = async () => {
    const lstSub = await PushNotificationSubscription.find({});
    return lstSub;
}


module.exports = {getNotificationMessages, getSubscriptionList};