const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],

    coursesAddedAt: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course',
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    isPublic: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

wishlistSchema.methods.addCourse = function (courseId) {
  if (!this.courses.includes(courseId)) {
    this.courses.push(courseId);
    this.coursesAddedAt.push({ course: courseId });
  }
  return this.save();
};

wishlistSchema.methods.removeCourse = function (courseId) {
  this.courses = this.courses.filter(id => id.toString() !== courseId.toString());
  this.coursesAddedAt = this.coursesAddedAt.filter(
    entry => entry.course.toString() !== courseId.toString()
  );
  return this.save();
};

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
