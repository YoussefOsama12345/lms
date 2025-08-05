const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User.model');
const PROVIDERS = require('../constants/oauth');
const {config} = require('../config/env')

const clientID = config.google.clientID
const clientSecret = config.google.clientSecret
const callbackURL = config.google.callbackURL

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          email: profile.emails[0].value,
          authProvider: PROVIDERS.GOOGLE
        });

        if (!user) {
          user = await User.create({
            username: profile.displayName || profile.emails[0].value.split('@')[0],
            email: profile.emails[0].value,
            authProvider: PROVIDERS.GOOGLE,
            providerId: profile.id,
            avatar: profile.photos[0].value,
          });
        }


        return done(null, user);
      } catch (error) {
        console.error('Google Auth Error:', error);
        return done(error, null);
      }
    }
  )
);
