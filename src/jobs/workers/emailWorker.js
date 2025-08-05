
const {Worker , defaultConnection } = require('../../config/bullmq')
const sendEmailProcessor = require('../processors/sendEmailProcessor')
const loggerMiddleware = require('../../utils/logger')

const logger = loggerMiddleware.logger;

const emailWorker = new Worker(
  'emailQueue',
  sendEmailProcessor,
  {
    defaultConnection,
    concurrency: 5,
    lockDuration: 300000,
    settings: {
      maxStalledCount: 2,
      backoffStrategy: {
        exponentialBackoff: (attemptsMade) => Math.pow(2, attemptsMade) * 1000
      }
    }
  }
);

emailWorker.on('completed', job => {
  logger.info(`Email job ${job.id} completed succesfully to: ${job.data.to}`);
});

emailWorker.on('failed',(job,error) => {
  logger.error(`Email Job ${job.id} failed after ${job.attemptsMade} attempt(s) : ${error.message}`)
});

emailWorker.on('progress', (job,progress) => {
  logger.info(`Email job ${job.id} is ${progress}% complete`);
})

emailWorker.on('error', (error) => {
  logger.error("Worker Internal Error" , error)
})


process.on('SIGINT', async() => {
  logger.info('Shutting down email worker...')
  await emailWorker.close();
  process.exit(0);
})

process.on('SIGTERM', async () => {
  logger.info('Email worker received SIGTERM signal. Shutting down...');
  await emailWorker.close();
  process.exit(0);
});

module.exports = emailWorker;
