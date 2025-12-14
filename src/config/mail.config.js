const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: process.env.MAIL_PORT || 587,
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
};
