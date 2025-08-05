const { required } = require('joi')
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Review must be associated with a user']
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required:[true, 'Review must be associated with a course']
    },

    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must not exceed 5'],
      validate: {
        validator: Number.isInteger,
        message: 'Rating must be an integer between 1 and 5'
      }
    },

    comment: {
      type: String,
      trim: true,
      minlength: [10, 'Comment must be at least 10 characters'],
      maxlength: [1000, 'Comment must not exceed 1000 characters']
    },
},{timestamps:true})

ReviewSchema.index({ user: 1, course: 1 }, { unique: true });
const Review = mongoose.model("Review",ReviewSchema)

module.exports = Review
