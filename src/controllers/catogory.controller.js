const catogoryService = require('../services/catogory.service');
const catogoryValidator = require('../validators/catogory.validator');
const STATUS_CODES = require('../constants/statusCodes');

const getAllCategories = async (req ,res) => {
  try {
    const categories = await catogoryService.getAllCategories();
    res.status(STATUS_CODES.OK).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
}


const getCategoryById = async (req, res) => {}

const updateCategory = async (req, res) => {}

const createCategory = async (req, res) => {}

const deleteCategory = async (req, res) => {}


const categoryController = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}

module.exports = categoryController;
