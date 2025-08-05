const { func } = require('joi');
const mongoose = require('mongoose')
const validator = require('validator')

const QuizSchema = new mongoose.Schema({
   title: {
    type: String,
    required: [true, "Quiz title is required"],
    trim: true,
    minlength: [3,"Quiz title must be at least 3 characters"],
    maxlength: [100,"Quiz title must be does not exceeds 100 characters"],
    match: [/^[a-zA-Z\s]+$/, "Quiz title must contain only letters and spaces"],
  },

  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: [true, "Quiz must be linked to a lesson"]
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Quiz must belong to a course"]
  },

  questions: [
    {
      questionText: {
        type: String,
        required: [true, "Question text is required"],
        trim: true
      },

      options: {
        type: [String],
        validate: {
          validator: function (v) {
            return Array.isArray(v) && v.length >= 2;
          },
          message: "Each question must have at least two options"
        }
      },

      correctAnswerIndex: {
        type: Number,
        required: [true, "Correct answer index is required"],
        validate: {
          validator: function (value) {
            return this.options && value >= 0 && value < this.options.length;
          },
          message: "Correct answer index must match one of the options"
        }
      },

      marks: {
        type: Number,
        default: 1,
        min: [0, "Marks must be at least 0"],
        max: [10, "Marks must not exceed 10"],
        validate: {
          validator: function(value){
            return validator.isNumeric(value)
          },
          message: "Marks must be an integer"
        }
      }
    }
  ],

  timeLimit: {
    type: Number,
    default: null
  },

  isPublished: {
    type: Boolean,
    default: false
  },

},{timestamps:true})

const Quiz = mongoose.model('Quiz',QuizSchema)

module.exports = Quiz
