/*
 * @Author: your name
 * @Date: 2021-12-13 16:24:10
 * @LastEditTime: 2021-12-13 16:33:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJS\04-http\server.js
 */
// 创建nodeJS服务

const http = require('http')

// 创建服务
const server = http.createServer((request, response) => {
  // request——前端的请求
  // response——要返回给前端内容

  let url = request.url

  response.write(url) // 向返回中写入内容
  response.end()  // 终止请求，必有项
})

// 监听端口号
server.listen(8090, 'localhost', ()=>{  
  console.log('localhost:8090创建成功')
})