const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取 cookie 的过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000)) // 当前时间加 24 小时
    console.log('d.toGMTString() is ',d.toGMTString())
    return d.toGMTString()
}

const handleUserRouter = (req, res) => {
    const method = req.method

    // 登陆
    if (method === 'GET' && req.path === '/api/user/login') {
        // const { username, password } = req.body
        const { username, password } = req.query
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                // 操作 cookie
                // res.setHeader('Set-Cookie',`username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
                // 设置 session
                req.session.username = data.username
                req.session.realname = data.realname
                console.log('req.session ...',req.session);
                
                return new SuccessModel()
            }
            return new ErrorModel('登陆失败')
        })
    }

    // 登陆验证的测试

    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(
                new SuccessModel({
                    session: req.session
                })
            )
        }
        return Promise.resolve(
            new ErrorModel('尚未登陆')
        )
    }
}



module.exports = handleUserRouter