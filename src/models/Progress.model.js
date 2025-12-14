const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course is required'],
    },

    lessonsCompleted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],

    quizzesCompleted: [
      {
        quiz: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Quiz',
        },
        score: {
          type: Number,
          min: 0,
        },
        completedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    assignmentsSubmitted: [
      {
        assignment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Assignment',
        },
        submittedAt: {
          type: Date,
          default: Date.now,
        },
        grade: {
          type: String,
          trim: true,
        },
      },
    ],

    lastAccessed: {
      type: Date,
      default: Date.now,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

ProgressSchema.index({ user: 1, course: 1 }, { unique: true });

const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress;
