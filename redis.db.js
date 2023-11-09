let Redis = require('ioredis')
require('dotenv').config()
let redis = new Redis(`${process.env.redis}`)

console.log("redis")

module.exports = {redis}