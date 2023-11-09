let Redis = require('ioredis')
require('dotenv').config()
let redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  });

  // Check if Redis is connected
redis.on('connect', () => {
    console.log('Connected to Redis');
});
  
  // Check for errors
redis.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});
console.log("redis")

module.exports = {redis}