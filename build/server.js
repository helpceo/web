const express = require('express')
const config = require('./config')
const proxy = require('http-proxy-middleware')
const index = require('../routes/index')

const app = express()
const port = config.port

//设置静态目录
app.use(express.static('src'))

//代理
const apiParts =proxy('/parts/api/**', {target: 'http://0.0.0.0:9004', changeOrigin: true,pathRewrite: {'/parts/api':'/api'}})
app.use('/parts', apiParts)

//路由
app.use('/', index)

//端口号
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})