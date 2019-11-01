const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.error(err)
})

function set(key, val){
    if(typeof val === 'object'){
        val = JSON.stringify(val) // 转成字符串
    }
    redisClient.set(key, val, redis.print)
}

function get(key){ // 异步形式，使用 promise 封装
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if(err){
                reject(err)
                return
            }
            if(val == null){
                resolve(null)
                return
            }

            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (ex){
                resolve(val)
            }
            // resolve(val);
        })
    })
    return promise
}

module.exports = {
    set,
    get
}