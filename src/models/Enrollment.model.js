const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    index: true
  },

  enrollmentDate: {
    type: Date,
    default: Date.now
  },

  progressPercentage: {
    type: Number,
    default: 0, // from 0 to 100
    min: 0,
    max: 100
  },

  completed: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

// Compound index for faster lookup by student and course
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
