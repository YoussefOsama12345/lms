const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const linkedinConfig = require('../../config/linkedin.config');

passport.use(
    new LinkedInStrategy(
        {
            clientID: linkedinConfig.clientID,
            clientSecret: linkedinConfig.clientSecret,
            callbackURL: linkedinConfig.callbackURL,
            scope: linkedinConfig.scope,
            state: true,
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

