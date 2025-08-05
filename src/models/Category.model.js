const mongoose = require('mongoose');
const validator = require('validator');


const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
    trim: true,
    minlength: [3, "Category name must be at least 3 characters long"],
    maxlength: [50, "Category name must not exceed 50 characters long"],
    match: [/^[a-zA-Z\s]+$/, "Category name must contain only letters and spaces"]
  },

  description: {
    type: String,
    required: [true, "Category description is required"],
    trim: true,
    minlength: [10, "Category description must be at least 10 characters long"],
    maxlength: [500, "Category description must not exceed 500 characters long"],
    match: [/^[a-zA-Z\s]+$/, "Category description must contain only letters and spaces"]
  },

  status: {
    type: String,
    enum: {
      values: ['Active', 'Inactive'],
      message: '{VALUE} is not a valid status'
    },
    default: 'Active',
  },

  imageUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(value){
        return validator.isURL(value, {
          protocols: ['http', 'https'],
          require_protocol: true,
          require_valid_protocol: true
        });
      },
      message: 'Please provide a valid image URL.'
    }
  },

  slug:{
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  }

}, {
  timestamps: true
})

CategorySchema.pre('save', function(next) {
  if (this.isModified('name')){
    this.slug = this.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
