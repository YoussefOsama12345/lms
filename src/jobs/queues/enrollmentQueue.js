
const {Queue , QueueScheduler , defaultConnection} = require('../../config/bullmq')

const enrollmentQueue = new Queue(
  'enrollmentQueue',
  defaultConnection
);

// new QueueScheduler('enrollmentQueue',defaultConnection);

module.exports = enrollmentQueue;
