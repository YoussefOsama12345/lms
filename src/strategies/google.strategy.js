const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleConfig = require('../../config/google.config');

passport.use(
    new GoogleStrategy(
        {
            clientID: googleConfig.clientID,
            clientSecret: googleConfig.clientSecret,
            callbackURL: googleConfig.callbackURL,
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);
