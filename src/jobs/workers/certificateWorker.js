
const { Worker , defaultConnection } = require('../../config/bullmq')
const generateCertificateProcessor = require('../processors/generateCertificateProcessor')
const loggerMiddleware = require('../../utils/logger')

const logger = loggerMiddleware.logger;

const certificateWorker = new Worker(
  'certificateQueue',
  generateCertificateProcessor,
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
)

certificateWorker.on('completed', (job) => {
  logger.info(`Certificate Job ${job.id} Completed Succesfully`)
})

certificateWorker.on('failed', (job,error) => {
  logger.error(`Certificate Job ${job.id} failed after ${job.attemptsMade} attempt(s) : ${error.message}`)
})

certificateWorker.on('progress', (job,progress) => {
  logger.info(`Certificate Job ${job.id} is ${progress}% complete`)
})

certificateWorker.on('error', (error) => {
  logger.error(`Worker Internal Error`, error)
})

process.on('SIGINT', async() => {
  logger.info('Shutting Down Certificate Worker')
  await certificateWorker.close();
  process.exit(0);
})


process.on('SIGTERM', async() => {
  logger.info('Certificate worker received SIGTERM signal. Shutting down...');
  certificateWorker.close();
  process.exit(0);
})

module.exports = certificateWorker;
