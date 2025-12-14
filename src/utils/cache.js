const redis = require('../config/redis');

async function getCache(key) {
  try {
    const data = await redis.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting cache', error);
    return null;
  }
}

async function setCache(key, value, ttl) {
  try {
    const val = JSON.stringify(value);
    if (ttl) {
      await redis.set(key, val, 'EX', ttl);
    } else {
      await redis.set(key, val);
    }
    return true;
  } catch (error) {
    console.error('Error setting cache', error);
    throw error;
  }
}

async function deleteCache(key) {
  try {
    await redis.del(key);
    return true;
  } catch (error) {
    console.error('Error deleting cache', error);
    return false;
  }
}

async function clearCache() {
  try {
    await redis.flushall();
    return true;
  } catch (error) {
    console.error('Error clearing cache', error);
    return false;
  }
}

module.exports = {
  getCache,
  setCache,
  deleteCache,
  clearCache,
};
