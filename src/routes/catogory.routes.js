const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/categories/get-all-categories', categoryController.getAllCategories);
router.get('/categories/get-category/:id', categoryController.getCategoryById);
router.post('/categories/create-category', categoryController.createCategory);
router.put('/categories/update-category/:id', categoryController.updateCategory);
router.delete('/categories/delete-category/:id', categoryController.deleteCategory);

module.exports = router;
