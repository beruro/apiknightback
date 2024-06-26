/* eslint-disable no-unused-vars */
'use strict'

/**
 * 本地环境
 */

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
    host: 'localhost',
    // 数据库类型
    dialect: 'mysql'
  }

  return config
}
