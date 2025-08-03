const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/users/get-all-users', userController.getAllUsers);
router.get('/users/get-user/:id', userController.getUserById);
router.put('/users/update-user/:id', userController.updateUser);
router.delete('/users/delete-user/:id', userController.deleteUser);

module.exports = router;
