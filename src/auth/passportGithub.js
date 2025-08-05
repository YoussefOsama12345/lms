const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const PROVIDERS = require('../constants/oauth');
const { config } = require('../config/env'); 

const clientID = config.github.clientID;
const clientSecret = config.github.clientSecret;
const callbackURL = config.github.callbackURL;

passport.use(
  new GitHubStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
      scope: ['user:email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          authProvider: PROVIDERS.GITHUB,
          providerId: profile.id,
        });

        if (!user) {
          const email = profile.emails?.[0]?.value || `${profile.username}@github.com`;

          user = await User.create({
            username: profile.username || email.split('@')[0],
            email,
            authProvider: PROVIDERS.GITHUB,
            providerId: profile.id,
            avatar: profile.photos?.[0]?.value,
          });
        }

        return done(null, user);
      } catch (error) {
        console.error('GitHub Auth Error:', error);
        return done(error, null);
      }
    }
  )
);
