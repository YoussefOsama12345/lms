const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const ROUTES = require('../constants/paths');

router.get(ROUTES.USER.GET_ALL_USERS, userController.getAllUsers);
router.get(ROUTES.USER.GET_USER, userController.getUserById);
router.put(ROUTES.USER.UPDATE_USER, userController.updateUser);
router.delete(ROUTES.USER.DELETE_USER, userController.deleteUser);

module.exports = router;
