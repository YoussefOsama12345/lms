const nodemailer = require("nodemailer");
const config = require("../config/mail.config");

const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // true for 465, false for other ports
    auth: {
        user: config.user,
        pass: config.pass,
    },
});

