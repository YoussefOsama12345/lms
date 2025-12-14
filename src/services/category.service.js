const prisma = require('../config/db.config');
const slugify = require('slugify'); // Assuming slugify is available or I should write utility. 

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

const getCategoryById = async categoryId => {
  return await prisma.category.findUnique({
    where: { id: categoryId },
  });
};

const createCategory = async categoryData => {
  // Generate slug
  if (categoryData.name) {
    categoryData.slug = slugify(categoryData.name, { lower: true, strict: true });
  }

  const category = await prisma.category.create({
    data: categoryData,
  });
  return category;
};

const updateCategory = async (categoryId, categoryData) => {
  // Update slug if name changes
  if (categoryData.name) {
    categoryData.slug = slugify(categoryData.name, { lower: true, strict: true });
  }

  return await prisma.category.update({
    where: { id: categoryId },
    data: categoryData,
  });
};

const deleteCategory = async categoryId => {
  return await prisma.category.delete({
    where: { id: categoryId },
  });
};

const categoryService = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryService;
