const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');
const { config } = require('../config/env');

// Create log directory if it doesn't exist
const logDirectory = path.join(process.cwd(), config.logDir || 'logs');

try {
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }
} catch (error) {
  console.error('Failed to create log directory:', error.message);
}

// Access log stream for HTTP requests
let accessLogStream;
try {
  accessLogStream = fs.createWriteStream(
    path.join(logDirectory, 'access.log'),
    { flags: 'a' }
  );
} catch (error) {
  console.error('Failed to create access log stream:', error.message);
  // Create a dummy stream that does nothing
  accessLogStream = {
    write: () => {}
  };
}

// Winston logger instance
const logger = createLogger({
  level: config.logLevel || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    // Console output (always available)
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ],
  exceptionHandlers: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ],
  rejectionHandlers: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ]
});

// Add file transports only if directory exists and is writable
try {
  logger.add(new transports.File({
    filename: path.join(logDirectory, 'combined.log'),
    level: 'info'
  }));
  logger.add(new transports.File({
    filename: path.join(logDirectory, 'error.log'),
    level: 'error'
  }));
  logger.add(new transports.File({
    filename: path.join(logDirectory, 'warn.log'),
    level: 'warn'
  }));
} catch (error) {
  console.error('Failed to add file transports:', error.message);
}

// Morgan middleware for HTTP requests logging
const httpLogger = morgan('combined', {
  stream: accessLogStream
});

// Optional: Also log requests to winston
const morganToWinston = morgan('combined', {
  stream: {
    write: (message) => {
      try {
        logger.info(message.trim());
      } catch (error) {
        console.error('Failed to log to winston:', error.message);
      }
    }
  }
});

// Error logging middleware
const errorLogger = (err, req, res, next) => {
  try {
    logger.error(`${req.method} ${req.url} - ${err.message}`, {
      stack: err.stack
    });
  } catch (error) {
    console.error('Failed to log error:', error.message);
  }
  res.status(500).json({ error: 'Internal Server Error' });
};

const loggerMiddleware = {
  httpLogger,         // for saving to access.log
  morganToWinston,    // for saving requests to winston
  errorLogger,
  logger
}

module.exports = loggerMiddleware;

