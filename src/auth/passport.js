const passport = require('passport');

// Strategies

require('./passportGoogle');
require('./passportGithub');
require('./passportFacebook');
require('./passportLinkedin');

const User = require('../models/User.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select('-password');
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


module.exports = passport
