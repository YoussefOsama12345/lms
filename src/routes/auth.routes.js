const express = require('express');
const router = express.Router();
const ROUTES = require('../constants/paths');
const authController = require('../controllers/auth.controller')

router.post(ROUTES.AUTH.LOGIN, authController.login);
router.post(ROUTES.AUTH.REGISTER, authController.register);
router.post(ROUTES.AUTH.LOGOUT, authController.logout);

// google auth

router.post(ROUTES.AUTH.GOOGLE,authController.googleAuth);
router.get(ROUTES.AUTH.GOOGLE_CALLBACK,authController.googleCallback);

// facebook auth

router.get(ROUTES.AUTH.FACEBOOK,authController.facebookAuth);
router.get(ROUTES.AUTH.FACEBOOK_CALLBACK,authController.facebookCallback);

// github auth

router.get(ROUTES.AUTH.GITHUB,authController.githubAuth)
router.get(ROUTES.AUTH.GITHUB_CALLBACK,authController.githubCallback)

// linkedin auth

router.get(ROUTES.AUTH.LINKEDIN,authController.linkedinAuth)
router.get(ROUTES.AUTH.LINKEDIN_CALLBACK,authController.linkedinCallback)




module.exports = router;
