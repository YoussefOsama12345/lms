
const PAYMENT_STATUS = {
   PENDING: "pending",
   COMPLETED: "completed",
   FAILED: "failed",
   REFUNDED: "refunded"
}

const PAYMENT_PROVIDERS = {
  STRIPE: "stripe",
  PAYPAL: "paypal"
}

const PAYMENT_METHODS ={
  CARD: "card",
  PAYPAL: "paypal",
  WALLET: "wallet",
  STRIPE: "stripe",
  FREE: "free"
}

const PAYMENT = {
  PAYMENT_METHODS,
  PAYMENT_PROVIDERS,
  PAYMENT_STATUS
}

module.exports = PAYMENT
