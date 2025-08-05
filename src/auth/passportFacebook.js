const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User.model');
const PROVIDERS = require('../constants/oauth');
const {config} = require('../config/env')

const clientID = config.facebook.clientID
const clientSecret = config.facebook.clientSecret
const callbackURL = config.facebook.callbackURL

passport.use(
  new FacebookStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: callbackURL,
      profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            username: profile.displayName || email?.split('@')[0],
            email,
            authProvider: PROVIDERS.FACEBOOK,
            providerId: profile.id,
            avatar: profile.photos?.[0]?.value,
          });
        }

        return done(null, user);
      } catch (error) {
        console.error('Error in Facebook Strategy:', error);
        return done(error, null);
      }
    }
  )
);
