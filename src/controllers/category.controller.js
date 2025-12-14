const categoryService = require('../services/category.service');
const { validateCategory } = require('../validators/category.validator');
const STATUS_CODES = require('../constants/status.constants');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(STATUS_CODES.OK).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: 'Category not found',
      });
    }
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Category fetched successfully',
      data: category,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to fetch category',
      error: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const validatedData = validateCategory(req.body);
    const category = await categoryService.createCategory(validatedData);
    res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: 'Category created successfully',
      data: category,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to create category',
      error: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const data = req.body;
  try {
    const validatedData = validateCategory(data);
    validatedData._id = categoryId;

    const updatedCategory = await categoryService.updateCategory(categoryId, validatedData);
    if (!updatedCategory) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: 'Category not found',
      });
    }
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Category updated successfully',
      data: updatedCategory,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to update category',
      error: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const deletedCategory = await categoryService.deleteCategory(categoryId);
    if (!deletedCategory) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: 'Category not found',
      });
    }
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Category deleted successfully',
      data: deletedCategory,
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to delete category',
      error: error.message,
    });
  }
};

const categoryController = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryController;
