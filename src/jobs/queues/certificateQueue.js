
const {Queue, QueueScheduler , defaultConnection } = require('../../config/bullmq')

const certificateQueue = new Queue('certificateQueue',defaultConnection)
// new QueueScheduler('certificateQueue',defaultConnection)

module.exports = certificateQueue;
