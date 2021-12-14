/*
 * @Author: your name
 * @Date: 2021-12-13 16:08:50
 * @LastEditTime: 2021-12-13 16:15:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nodeJS\02-fs\index.js
 */
// 读写文件

const fs = require('fs')

fs.writeFile('./log.js','hello', (err, data)=>{
  if(err){
    console.log('err')
  }else{
    console.log('文件创建成功')
  }
})