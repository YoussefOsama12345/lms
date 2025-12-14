const joi = require('joi');

const courseSchema = joi
  .object({
    title: joi
      .string()
      .trim()
      .replace(/\s+/g, ' ')
      .pattern(/^[A-Za-z0-9\s\-_'"]+$/)
      .min(3)
      .max(100)
      .required()
      .messages({
        'string.base': 'Title must be a text string.',
        'string.empty': 'Title cannot be empty or just spaces.',
        'string.min': 'Title must be at least 3 characters long.',
        'string.max': 'Title must not exceed 100 characters.',
        'string.pattern.base':
          'Title can only contain letters, numbers, spaces, and these symbols: - _ \' "',
        'any.required': 'Title is a required field.',
      }),

    description: joi
      .string()
      .trim()
      .replace(/\s+/g, ' ')
      .min(10)
      .max(500)
      .pattern(/^[\w\d\s\-_'".,!?():;]+$/)
      .required()
      .messages({
        'string.base': 'Description must be a text string.',
        'string.empty': 'Description cannot be empty or just spaces.',
        'string.min': 'Description must be at least 10 characters long.',
        'string.max': 'Description must not exceed 500 characters.',
        'string.pattern.base':
          'Description contains invalid characters. Only letters, numbers, punctuation, and basic symbols are allowed.',
        'any.required': 'Description is a required field.',
      }),

    price: joi.number().positive().precision(2).min(0.01).max(999999.99).required().messages({
      'number.base': 'Price must be a numeric value.',
      'number.positive': 'Price must be greater than 0.',
      'number.min': 'Price must be at least 0.01.',
      'number.max': 'Price must not exceed 999,999.99.',
      'number.precision': 'Price can have at most 2 decimal places.',
      'any.required': 'Price is a required field.',
    }),

    // instructor: joi.string()
    //   .custom((value, helpers) => {
    //     if (!mongoose.Types.ObjectId.isValid(value)) {
    //       return helpers.error('any.invalid');
    //     }
    //     return value;
    //   })
    //   .required()
    //   .messages({
    //     'any.invalid': 'Instructor must be a valid ObjectId.',
    //     'any.required': 'Instructor is required.'
    //   }),

    level: joi.string().valid('Beginner', 'Intermediate', 'Advanced').default('Beginner').messages({
      'any.only': 'Level must be one of [Beginner, Intermediate, Advanced].',
    }),

    duration: joi.number().min(0).messages({
      'number.base': 'Duration must be a number.',
      'number.min': 'Duration must be a positive number or zero.',
    }),

    language: joi.string().max(30).default('English').messages({
      'string.max': 'Language must not exceed 30 characters.',
    }),

    thumbnailUrl: joi.string().uri().messages({
      'string.uri': 'Thumbnail URL must be a valid URI.',
    }),

    tags: joi.array().items(joi.string().trim().max(30)).messages({
      'string.base': 'Each tag must be a string.',
      'string.empty': 'Each tag cannot be empty.',
      'array.base': 'Tags must be an array of strings.',
      'string.max': 'Each tag must not exceed 30 characters.',
    }),

    isPublished: joi.boolean().default(false),

    publishedAt: joi.date().greater('1-1-1970').messages({
      'date.base': 'PublishedAt must be a valid date.',
      'date.greater': 'PublishedAt must be a valid date after Jan 1, 1970.',
    }),

    rating: joi.number().min(0).max(5).default(0).messages({
      'number.min': 'Rating cannot be less than 0.',
      'number.max': 'Rating cannot be greater than 5.',
    }),

    numberOfReviews: joi.number().min(0).default(0).messages({
      'number.min': 'Number of reviews cannot be less than 0.',
    }),
  })
  .options({
    abortEarly: false,
    stripUnknown: true,
  });

const validateCourse = courseData => {
  const { error, value } = courseSchema.validate(courseData);
  if (error) {
    const messages = error.details.map(err => err.message).join(' | ');
    throw new Error(messages);
  }
  return value;
};

module.exports = {
  validateCourse,
};
