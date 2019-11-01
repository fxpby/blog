const getList = (author, keyword) => {
    // 先返回假数据（格式正确）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1546610491112,
            author: 'Helen'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1546610491122,
            author: 'Lucy'
        }
    ]
}

const getDetail = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1546610491112,
        author: 'Helen'
    }
}

const newBlog = (blogData = {}) => {
    // blogData是一个博客对象，包含title content属性
    console.log('newBlog blogData:',blogData)
    return {
        id: 3 // 表示新建博客插入到数据表里的 id
    }
}

const updateBlog = (id, blogData = {}) => {
    //id 是要更新博客的 id
    // blogData是一个博客对象，包含title content属性
    console.log('update blog:', id, blogData)
    return true
}

const delBlog = (id) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}