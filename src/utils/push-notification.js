const webpush = require('web-push');
const dotenv = require('dotenv');
const pushNotification = require('../controllers/push-notification');

dotenv.config();

const options = {
    vapidDetails: {
        subject: 'mailto:priynshuchouhn@gmail.com',
        publicKey: process.env.VAPID_PUBLIC_KEY,
        privateKey: process.env.VAPID_PRIVATE_KEY,
    },
    TTL: 60,
};

async function sendMessageToAll(){
    const text = await pushNotification.getNotificationMessages();
    const lstSubscription = await pushNotification.getSubscriptionList();
    const payload = {
        notification: {
            title: text.title,
            body: text.body,
            icon: 'https://app.voguevista.live/assets/logo/vogue-vista-logo.png',
            actions: [
                {
                    action: 'visit_website',
                    title: 'Get Offer',
                    url: 'https://app.voguevista.live', // Replace this with your actual website URL
                }
            ]
        },
    };
    lstSubscription.forEach(subscription => {
        webpush.sendNotification(subscription, JSON.stringify(payload), options)
            .then((_) => {
                console.log('SENT');
            })
            .catch((_) => {
                console.log(_);
            });
    });
}

module.exports = sendMessageToAll;
