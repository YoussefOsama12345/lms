const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course reference is required'],
      index: true,
    },

    title: {
      type: String,
      required: [true, 'Section title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title can be maximum 100 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Section title must contain only letters and spaces'],
    },

    description: {
      type: String,
      default: '',
      minlength: [10, 'Description can be minimun 10 characters'],
      maxlength: [500, 'Description can be maximum 500 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Section title must contain only letters and spaces'],
    },

    order: {
      type: Number,
      required: [true, 'Order is required'],
      min: [1, 'Order must be at least 1'],
      validate: {
        validator: Number.isInteger,
        message: 'Order must be an integer',
      },
    },

    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

SectionSchema.index({ course: 1, order: 1 }, { unique: true });

const Section = mongoose.model('Section', SectionSchema);

module.exports = Section;
