require('dotenv').config();

module.exports = {
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URL || "http://localhost:5000/api/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile'],
};
