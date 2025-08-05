const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller')
const ROUTES = require('../constants/paths');

router.get(ROUTES.CATEGORY.GET_ALL_CATEGORIES,categoryController.getAllCategories);
router.get(ROUTES.CATEGORY.GET_CATEGORY, categoryController.getCategoryById);
router.post(ROUTES.CATEGORY.CREATE_CATEGORY, categoryController.createCategory);
router.put(ROUTES.CATEGORY.UPDATE_CATEGORY, categoryController.updateCategory);
router.delete(ROUTES.CATEGORY.DELETE_CATEGORY, categoryController.deleteCategory);

module.exports = router;
