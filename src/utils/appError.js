class AppError extends Error {
  constructor(message, statusCode, details = null) {
    super(message);

    this.name = this.constructor.name; // 'AppError'
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }

  createErrorResponse() {
    const response = {
      statusCode: this.statusCode,
      status: this.status,
      message: this.message,
      isOperational: this.isOperational,
    };

    if (this.details) response.details = this.details;

    return response;
  }
}

module.exports = AppError;
