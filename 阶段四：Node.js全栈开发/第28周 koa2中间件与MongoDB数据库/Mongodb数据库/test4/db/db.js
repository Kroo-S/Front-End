// 连接数据库（mongodb 的服务端）

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'comment2'

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const conn = mongoose.connection

conn.on('error', err => {
    console.error('mongoose 连接出错', err)
})

module.exports = mongoose
