const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "Lesson title is required"],
      minlength: [3,"Lesson Title must be at least 3 characters"],
      maxlength: [100,"Lesson title must not exceed 100 characters"],
      match: [/^[a-zA-Z\s]+$/, "Category name must contain only letters and spaces"],
      trim: true
   },

   description: {
      type: String,
      required: [true, "Lesson description is required"],
      minlength: [10,"Lesson description must be at least 10 characters"],
      maxlength: [500,"Lesson description must not exceed 500 characters"],
      match: [/^[a-zA-Z\s]+$/, "Category name must contain only letters and spaces"],
      trim: true
   },

   course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true,"Lesson must belong to a course"]
   },

   instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true,"Instructor is required"]
   },

   videoUrl: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, "Video URL must be a valid URL"],
      default: null
   },

   resources: [
    {
       title: {
          type: String
       },

       fileUrl: {
          type: String,
          match: [/^https?:\/\/.+/, "Resource URL must be valid"]
       }
    }
   ],

   order: {
      type: Number,
      required: [true,"Order is required"],
      min: [1,"Lesson Order must be at least 1"]
   },

   isPublished: {
      type: Boolean,
      default: false
   },
},{timestamps:true})


const Lesson = mongoose.model('Lesson',LessonSchema)

module.exports = Lesson
