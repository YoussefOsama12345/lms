const mongoose = require('mongoose');
const validator = require('validator');
const hashUtils = require('../utils/hash')
const ROLES = require('../constants/roles');
const PROVIDERS = require('../constants/oauth');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [30, 'Username must not exceed 30 characters'],
      trim: true,
      match: [
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores',
      ],
      validate: {
        validator: function (value) {
          return !/^\d+$/.test(value);
        },
        message: 'Username cannot be only numbers',
      },
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email address',
      },
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: validator.isMobilePhone,
        message: "Please provide a valid phone number"
      }
    },

    address: {
      city: {
        type: String,
        trim: true,
        lowercase: true
      },
      street: {
        type: String,
        trim: true,
        lowercase: true
      }
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
      validate: {
        validator: function(value){
          return validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
          })

        },
        message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
      }
    },

    authProvider: {
      type: String,
      enum: [
        PROVIDERS.GOOGLE,
        PROVIDERS.FACEBOOK,
        PROVIDERS.GITHUB,
        PROVIDERS.LINKEDIN,
        PROVIDERS.LOCAL
      ],
      default: PROVIDERS.LOCAL
    },

    role: {
      type: String,
      enum: [ROLES.USER ,ROLES.ADMIN ,ROLES.INSTRUCTOR],
      default: ROLES.USER,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    profileImage: {
      type: String,
      default: '',
      trim: true,
      validate: {
        validator: function(value) {
          return (
            value === '' ||
            validator.isURL(value, {
              protocols: ['http', 'https'],
              require_protocol: true,
              require_valid_protocol: true
            })
          );
        },
        message: 'Profile image must be a valid URL with http or https',
      }
    },

    social: {
      google: {
        id: { type: String, default: null },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          validate: {
            validator: function (value) {
              return value === null || validator.isEmail(value);
            },
            message: 'Invalid Google email format',
          },
          default: null,
        },
      },

      facebook: {
        id: { type: String, default: null },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          validate: {
            validator: function (value) {
              return value === null || validator.isEmail(value);
            },
            message: 'Invalid Facebook email format',
          },
          default: null,
        },
      },

      github: {
        id: { type: String, default: null },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          validate: {
            validator: function (value) {
              return value === null || validator.isEmail(value);
            },
            message: 'Invalid GitHub email format',
          },
          default: null,
        },
      },

      linkedin: {
        id: { type: String, default: null },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          validate: {
            validator: function (value) {
              return value === null || validator.isEmail(value);
            },
            message: 'Invalid LinkedIn email format',
          },
          default: null,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')){
    return next()
  }

  this.password = await hashUtils.hashPassword(this.password)
  next();
});


UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await hashUtils.comparePassword(candidatePassword,this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
