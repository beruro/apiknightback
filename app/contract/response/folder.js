'use strict'
module.exports = {
    ResponseCreateFolder: {
        code: { type: 'number', example: 200, description: '状态码' },
        message: { type: 'string', example: '创建成功', description: '描述信息' }
    },
    ResponseUpdateFolder: {
        code: { type: 'number', example: 200, description: '状态码' },
        message: { type: 'string', example: '更改成功', description: '描述信息' }
    },
    ResponseDeleteFolder: {
        code: { type: 'number', example: 200, description: '状态码' },
        message: { type: 'string', example: '删除成功', description: '描述信息' }
    },
    RespnseFolderQueryName: {
        code: {
            type: 'number',
            example: 200,
            description: '状态码'
        },
        data: {
            type: 'object',
            properties: {
                name: { type: 'string', description: '名称' }
            }
        },
        message: {
            type: 'string',
            example: '查询成功',
            description: '描述信息'
        }
    }
}
