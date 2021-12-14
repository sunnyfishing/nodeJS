/*
 * @Author: your name
 * @Date: 2021-12-13 15:56:19
 * @LastEditTime: 2021-12-13 16:05:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJS\server.js
 */

// 使用nodejs访问该请求就不会出现跨域问题了
const https = require('https')

https.get('https://m.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=30&optimus_uuid=A5518FF0AFEC11EAAB158D7AB0D05BBBD74C9789D9F649898982E6542C7DD479&optimus_risk_level=71&optimus_code=10', res=>{
  let str = ''
  res.on('data', (chunk) => {
    str+=chunk
  })
  res.on('end', () => {
    console.log(str)
  })
})