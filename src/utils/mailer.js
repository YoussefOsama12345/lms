const mailer = require('nodemailer');
const { config } = require('../config/env');

const HOST = config.email.host;
const PORT = config.email.port;
const USER = config.email.user;
const PASS = config.email.pass;

const transporter = mailer.createTransport({
    host: HOST,
    port: PORT,
    auth: {
      user: USER,
      pass: PASS
    },
    tls: {
      rejectUnauthorized: false
    }
});


const sendEmail = async (to, subject, text, html) => {
  try{
    const info = await transporter.sendMail({
      from: `"LMS" <${USER}>`,
      to,
      subject,
      text,
      html
    })

    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}

module.exports = {
  sendEmail
}
