const joi = require('joi');

const categorySchema = joi
  .object({
    name: joi.string().trim().replace(/\s+/g, ' ').min(3).max(50).required().messages({
      'string.base': 'Category name just be a text string.',
      'string.empty': 'Category name cannot be empty or just spaces.',
      'string.min': 'Category name must be at least 3 characters long.',
      'string.max': 'Category name must not exceed 50 characters.',
      'any.required': 'Category name is a required field.',
    }),

    description: joi.string().trim().replace(/\s+/g, ' ').min(10).max(50).required().messages({
      'string.base': 'Category description must be a text string.',
      'string.empty': 'Category description cannot be empty or just spaces.',
      'string.min': 'Category description must be at least 10 characters long.',
      'string.max': 'Category description must not exceed 200 characters.',
      'any.required': 'Category description is a required field.',
    }),

    status: joi.string().valid('Active', 'Inactive').default('Active').messages({
      'string.base': 'Category status must be a text string.',
      'string.empty': 'Category status cannot be empty or just spaces.',
      'any.only': 'Category status must be either Active or Inactive.',
    }),

    imageUrl: joi.string().uri().trim().messages({
      'string.base': 'Image URL must be a text string.',
      'string.uri': 'Image URL must be a valid URL.',
      'string.empty': 'Image URL cannot be empty or just spaces.',
    }),

    slug: joi.string().trim().lowercase().messages({
      'string.base': 'Slug must be a text string.',
      'string.empty': 'Slug cannot be empty or just spaces.',
      'string.lowercase': 'Slug must be in lowercase.',
    }),
  })
  .options({
    abortEarly: false,
    stripUnknown: true,
  });

const validateCategory = data => {
  const { error, value } = categorySchema.validate(data);
  if (error) {
    const messages = error.details.map(err => err.message);
    throw new Error(messages.join(' | '));
  }
  return value;
};

module.exports = {
  validateCategory,
};
