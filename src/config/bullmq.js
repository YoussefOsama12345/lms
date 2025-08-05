
const { Queue, Worker, QueueScheduler } = require('bullmq');
const redis = require('./redis');

const defaultConnection = {
  connection: redis
};

module.exports = {
  Queue,
  Worker,
  QueueScheduler,
  defaultConnection
};
