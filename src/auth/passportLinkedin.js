const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/User.model');
const PROVIDERS = require('../constants/oauth');
const {config} = require('../config/env')

const clientID = config.linkedin.clientID
const clientSecret = config.linkedin.clientSecret
const callbackURL = config.linkedin.callbackURL

passport.use(
  new LinkedInStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: callbackURL,
      scope: ['r_emailaddress', 'r_liteprofile'],
      state: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            username: profile.displayName || email?.split('@')[0],
            email,
            authProvider: PROVIDERS.LINKEDIN,
            providerId: profile.id,
            avatar: profile.photos?.[0]?.value,
          });
        }

        return done(null, user);
      } catch (error) {
        console.error('Error in LinkedIn Strategy:', error);
        return done(error, null);
      }
    }
  )
);
