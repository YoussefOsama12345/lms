const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title must not exceed 100 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Course name must contain only letters and spaces'],
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description must not exceed 500 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Course description must contain only letters and spaces'],
    },

    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0.01, 'Price must be at least 0.01'],
      max: [999999.99, 'Price must not exceed 999,999.99'],
      validate: {
        validator: function (v) {
          return /^\d+(\.\d{1,2})?$/.test(v.toString());
        },
        message: props => `${props.value} is not a valid price with max 2 decimal places!`,
      },
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Instructor is required'],
    },

    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },

    duration: {
      type: Number,
      min: [0, 'Duration must be a positive number'],
    },

    language: {
      type: String,
      default: 'English',
      maxlength: [30, 'Language must not exceed 30 characters'],
    },

    thumbnailUrl: {
      type: String,
      trim: true,
    },

    tags: [
      {
        type: String,
        trim: true,
        maxlength: 30,
      },
    ],

    isPublished: {
      type: Boolean,
      default: false,
    },

    publishedAt: {
      type: Date,
    },

    rating: {
      type: Number,
      min: [0, 'rating must be at least 0'],
      max: [5, 'rating must be does not exceeds 5'],
      default: 0,
    },

    numberOfReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

CourseSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
