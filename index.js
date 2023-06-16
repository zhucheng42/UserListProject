const express = require('express')
const router = require('./router')
const parser = require('body-parser')
const cors = require('cors')
//create web sever
const app = express()
//一定要在路由之前配置cors从而解决跨域问题
app.use(cors())
app.use(parser.json())
// app.use(express.json())

app.use('/api', router)
const PORT = 8080;
app.listen(PORT, ()=>{
  console.log('server is running on http://localhost:8080');
})