
const { Worker , defaultConnection } = require('../../config/bullmq');
const enrollmentProcessor = require('../processors/enrollmentProcessor');
const loggerMiddleware = require('../../utils/logger');

const logger = loggerMiddleware.logger;

const enrollmentWorker = new Worker(
    'enrollmentQueue',
    enrollmentProcessor,
    {
      defaultConnection,
      concurrency: 5,
      lockDuration: 300000,
      settings: {
        maxStalledCount: 2,
        backoffStrategy:{
          exponentialBackoff: (attemptsMade) => Math.pow(2, attemptsMade) * 1000
        }
      }
    }
)

enrollmentWorker.on('completed', (job) => {
  logger.info(`Enrollment Job ${job.id} Completed Successfully`);
})

enrollmentWorker.on('failed', (job,error) => {
  logger.error(`Email Job ${job.id} failed after ${job.attemptsMade} attempt(s) : ${error.message}`)
})

enrollmentWorker.on('progress', (job,progress) => {
  logger.info(`Email job ${job.id} is ${progress}% complete`);
})

enrollmentWorker.on('error', (error) => {
  logger.error("Worker Internal Error" , error)
})


process.on('SIGINT', async() => {
  logger.info('Shutting down Enrollment Worker...')
  enrollmentWorker.close();
  process.exit(0);
})

process.on('SIGTERM', async() =>{
  logger.info('Enrollment worker received SIGTERM signal. Shutting down...');
  enrollmentWorker.close()
  process.exit(0)
})

module.exports = enrollmentWorker;
