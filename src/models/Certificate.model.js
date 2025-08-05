const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required for the certificate']
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course is required for the certificate']
    },

    certificateId: {
      type: String,
      required: [true, 'Certificate ID is required'],
      unique: true,
      trim: true
    },

    issueDate: {
      type: Date,
      default: Date.now
    },

    completionStatus: {
      type: String,
      enum: ['completed', 'incomplete'],
      default: 'completed'
    },

    grade: {
      type: String,
      trim: true,
      match: [/^[A-F][+-]?$/, 'Invalid grade format'],
      required: false
    },

    verified: {
      type: Boolean,
      default: false
    },

    downloadUrl: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Certificate = mongoose.model('Certificate',CertificateSchema)

module.exports = Certificate
