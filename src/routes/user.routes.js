const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/users/get-all-users', userController.getAllUsers);
router.get('/users/get-user/:userId', userController.getUserById);
// router.post('/users/create-user', userController.createUser); // Usually auth register
router.put('/users/update-user/:userId', userController.updateUser);
router.delete('/users/delete-user/:userId', userController.deleteUser);

module.exports = router;
