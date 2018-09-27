const Controller = require('egg').Controller

class Vue {
    constructor(obj) {
        this.obj = obj
        class VueController extends Controller {
            //vue data 数据获取
            async getParam() {
                const query = this.ctx.query
                if (JSON.stringify(obj.data) !== '{}') {
                    for (let key in obj.data) {
                        if (query[key] !== undefined) {
                            obj.data[key] = query[key]
                        }
                    }
                }
            }
            //处理返回结果信息
            async handle() {
                this.getParam()
                Object.assign(obj, obj.data, obj.methods)
                this.ctx.body = obj.mounted.call(obj)
            }
        }
        return VueController
    }
}
module.exports = Vue;