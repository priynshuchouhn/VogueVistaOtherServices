const nodemailer  = require('nodemailer');
const dotenv =  require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, 
    auth: {
        user: `${process.env.BREVO_EMAIL}`, 
        pass: `${process.env.BREVO_PASSWORD}`,
    },
});

module.exports = transporter