const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');
const { config } = require('../config/env');

// Create log directory if it doesn't exist
const logDirectory = path.join(__dirname, '..', config.logDir || 'logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Access log stream for HTTP requests
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, 'access.log'),
  { flags: 'a' }
);

// Winston logger instance
const logger = createLogger({
  level: config.logLevel || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    // Combined log (info and above)
    new transports.File({
      filename: path.join(logDirectory, 'combined.log'),
      level: 'info'
    }),
    // Error-only log
    new transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error'
    }),
    // Warning-only log
    new transports.File({
      filename: path.join(logDirectory, 'warn.log'),
      level: 'warn'
    }),
    // Console output
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ],
  exceptionHandlers: [
    new transports.File({ filename: path.join(logDirectory, 'exceptions.log') })
  ],
  rejectionHandlers: [
    new transports.File({ filename: path.join(logDirectory, 'rejections.log') })
  ]
});

// Morgan middleware for HTTP requests logging
const httpLogger = morgan('combined', {
  stream: accessLogStream
});

// Optional: Also log requests to winston
const morganToWinston = morgan('combined', {
  stream: {
    write: (message) => {
      logger.info(message.trim());
    }
  }
});

// Error logging middleware
const errorLogger = (err, req, res, next) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`, {
    stack: err.stack
  });
  res.status(500).json({ error: 'Internal Server Error' });
};

const loggerMiddleware = {
  httpLogger,         // for saving to access.log
  morganToWinston,    // for saving requests to winston
  errorLogger
}
module.exports = loggerMiddleware;

