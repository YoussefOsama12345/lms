const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title field is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Assignment name must be at least 3 characters'],
      maxlength: [50, 'Assignment name must be at most 50 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Assignment title must contain only letters and spaces'],
    },

    description: {
      type: String,
      required: [true, 'description field is required'],
      trim: true,
      minlength: [10, 'Assignment description must be at least 10 characters'],
      maxlength: [500, 'Assignment description must be at most 500 characters'],
      match: [/^[a-zA-Z\s]+$/, 'Assignment description must contain only letters and spaces'],
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Assignment must belong to a course'],
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Instructor is required'],
    },

    dueDate: {
      type: Date,
      required: [true, 'Due date is required'],
    },

    totalMarks: {
      type: Number,
      required: [true, 'total marks is required'],
      min: [1, 'Total marks must be at least 1'],
      max: [1000, 'Total marks must not exceed 1000'],
    },

    attachments: [
      {
        fileName: String,
        fileUrl: String,
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;
