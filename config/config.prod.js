'use strict'

/**
 * 生产环境
 */

const os = require('os')

module.exports = app => {
  const config = {}

  config.sequelize = {
    // 连接用户
    username: 'root',
    // 连接密码
    password: '20020821',
    // 连接的数据库，可根据需要改成已有的数据库
    database: 'byte',
    // 连接地址
    host: '10.203.30.242',
    // 数据库类型
    dialect: 'mysql'
  }

  // 自定义日志路径
  // https://eggjs.org/zh-cn/core/logger.html
  config.logger = {
    dir: `${os.homedir()}/logs/${app.name}`
  }

  return config
}
