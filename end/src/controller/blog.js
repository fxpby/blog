const { exec,escape } = require('../db/mysql')
const xss = require('xss')
const getList = (author, keyword) => {
    author = escape(author)
    // keyword = escape(keyword)
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql += `and author=${author} `
    }
    if(keyword){
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc`

    // 返回 promise
    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // blogData是一个博客对象，包含title content属性
    const title = xss(blogData.title)
    const content = xss(blogData.content)
    const createtime = Date.now()
    const author = blogData.author   

    const sql = `
        insert into blogs (title,content,createtime,author)
         values ('${title}','${content}',${createtime},'${author}');
    `

    return exec(sql).then(insertData => {
        // console.log('insertData is: ',insertData)
        return{
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
    //id 是要更新博客的 id
    // blogData是一个博客对象，包含title content属性

    const title = xss(blogData.title)    //标题
    const content = xss(blogData.content)    //内容

    const sql = `
        update blogs set title='${title}',content='${content}' where id=${id}
    `

    return exec(sql).then(updateData => {
        // console.log('updateData id :',updateData)
        if(updateData.affectedRows > 0){
            return true
        }
        return false
    })
}

const delBlog = (id, author) => {
    const sql = `
        delete from blogs where id='${id}' and author='${author}'
    `
    return exec(sql).then(delData => {
        if(delData.affectedRows > 0){
            return true
        }
    })
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}