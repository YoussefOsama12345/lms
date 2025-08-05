
const {Queue , QueueScheduler, defaultConnection} = require('../../config/bullmq')

const emailQueue = new Queue('emailQueue',defaultConnection)
// new QueueScheduler('emailQueue',defaultConnection)

module.exports = emailQueue;
