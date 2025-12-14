const mongoose = require('mongoose');
const PAYMENT = require('../constants/payment');

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
      index: true,
    },

    courseSnapshot: {
      title: { type: String, required: true },
      priceAtPurchase: { type: Number, required: true },
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: 'EGP',
    },

    paymentMethod: {
      type: String,
      enum: [
        PAYMENT.PAYMENT_METHODS.CARD,
        PAYMENT.PAYMENT_METHODS.PAYPAL,
        PAYMENT.PAYMENT_METHODS.STRIPE,
        PAYMENT.PAYMENT_METHODS.WALLET,
        PAYMENT.PAYMENT_METHODS.FREE,
      ],
      default: PAYMENT.PAYMENT_METHODS.CARD,
    },

    paymentStatus: {
      type: String,
      enum: [
        PAYMENT.PAYMENT_STATUS.PENDING,
        PAYMENT.PAYMENT_STATUS.COMPLETED,
        PAYMENT.PAYMENT_STATUS.FAILED,
        PAYMENT.PAYMENT_STATUS.REFUNDED,
      ],
      default: PAYMENT.PAYMENT_STATUS.PENDING,
    },

    paymentProvider: {
      type: String,
      enum: [PAYMENT.PAYMENT_PROVIDERS.STRIPE, PAYMENT.PAYMENT_PROVIDERS.PAYPAL],
      default: null,
    },

    coupon: {
      code: { type: String },
      discountAmount: { type: Number, default: 0 },
    },

    isFree: {
      type: Boolean,
      default: false,
    },

    transactionId: {
      type: String,
      default: null,
      unique: true,
      sparse: true,
    },

    invoiceNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    notes: {
      type: String,
    },

    purchasedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.index({ user: 1, course: 1 });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
