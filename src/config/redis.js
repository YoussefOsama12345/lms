const { createClient } = require('ioredis');
const { config } = require('./env');

const REDIS_URL = config.redis.redis_url;

const redis = createClient({
  url: REDIS_URL,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redis.on('connect', () => {
  console.log('Redis Connected');
});

redis.on('ready', () => {
  console.log('Redis is Ready to use');
});

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

redis.on('reconnecting', () => {
  console.warn('Redis is reconnecting...');
});

redis.on('end', () => {
  console.warn('Redis is closing...');
});


// Handle app shutdown
process.on('SIGINT', async () => {
  console.log('Redis Closing Connection (SIGINT)');
  await redis.quit();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Redis Closing Connection (SIGTERM)');
  await redis.quit();
  process.exit(0);
});

module.exports = redis;
