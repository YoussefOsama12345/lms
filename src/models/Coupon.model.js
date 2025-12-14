const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, 'Coupon code is required'],
      unique: true,
      uppercase: true,
      trim: true,
      minlength: [4, 'Coupon code must be at least 4 characters'],
      maxlength: [20, 'Coupon code must be at most 20 characters'],
      match: [/^[A-Z0-9]+$/, 'Coupon code must contain only uppercase letters and numbers'],
    },

    discountPercent: {
      type: Number,
      required: [true, 'Discount percent is required'],
      min: [1, 'Discount must be at least 1%'],
      max: [100, 'Discount cannot exceed 100%'],
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: false,
    },

    maxUses: {
      type: Number,
      default: null,
      min: [1, 'maxUses must be at least 1'],
      max: [200, 'maxUses cannot be more than 200'],
      validate: {
        validator: function (v) {
          return v === null || Number.isInteger(v);
        },
        message: 'maxUses must be an integer',
      },
    },

    usedCount: {
      type: Number,
      default: 0,
      min: [0, 'Used count cannot be negative'],
    },

    expiryDate: {
      type: Date,
      required: [true, 'Expiry date is required'],
      validate: {
        validator: function (v) {
          return v > new Date();
        },
        message: 'Expiry date must be in the future',
      },
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster lookup by code
couponSchema.index({ code: 1 });

couponSchema.methods.isValid = function () {
  if (!this.active) return false;
  if (this.expiryDate < new Date()) return false;
  if (this.maxUses !== null && this.usedCount >= this.maxUses) return false;
  return true;
};

couponSchema.statics.incrementUsage = async function (couponId) {
  const coupon = await this.findById(couponId);
  if (!coupon) throw new Error('Coupon not found');
  if (!coupon.isValid()) throw new Error('Coupon is not valid or has expired');

  coupon.usedCount++;
  await coupon.save();
  return coupon;
};

// Index for faster lookup by code
couponSchema.index({ code: 1 });

module.exports = mongoose.model('Coupon', couponSchema);
