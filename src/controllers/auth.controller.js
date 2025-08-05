const passport = require('../auth/passport')

const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

const googleCallback = passport.authenticate('google', {
  failureRedirect: '/auth/login-failed',
  successRedirect: '/auth/profile'
});

// Facebook Auth

const facebookAuth = passport.authenticate('facebook', {
  scope: ['email']
});

const facebookCallback = passport.authenticate('facebook', {
  failureRedirect: '/auth/login-failed',
  successRedirect: '/auth/profile'
});

// GitHub Auth
const githubAuth = passport.authenticate('github', {
  scope: ['user:email']
});

const githubCallback = passport.authenticate('github', {
  failureRedirect: '/auth/login-failed',
  successRedirect: '/auth/profile'
});

// LinkedIn Auth
const linkedinAuth = passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile']
});

const linkedinCallback = passport.authenticate('linkedin', {
  failureRedirect: '/auth/login-failed',
  successRedirect: '/auth/profile'
});

const authController = {
  googleAuth,
  googleCallback,
  facebookAuth,
  facebookCallback,
  githubAuth,
  githubCallback,
  linkedinAuth,
  linkedinCallback
};

module.exports = authController;
