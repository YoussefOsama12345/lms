const mongoose = require('mongoose');

const assignmentSubmissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true,
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  submittedAt: {
    type: Date,
    default: Date.now,
  },

  fileUrl: {
    type: String,
    required: [true, 'Submission file URL is required'],
  },

  marksObtained: {
    type: Number,
    default: null,
    min: 0,
  },

  feedback: {
    type: String,
    trim: true,
  },

  gradedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
});

const AssignmentSubmission = mongoose.model('AssignmentSubmission', assignmentSubmissionSchema);

module.exports = AssignmentSubmission;
