#### 突发奇想，将vue的设计模式用于服务端node的egg框架，让服务端的数据获取跟前端vue框架一致

#### 本插件基于egg^2.2.1,在egg基础目录的/app/controller/*.js中如下引用。
```js
'use strict';
const Vue = require('egg-vue');

module.exports = new Vue({
  data: { //  绑定获取的参数值
    username: '',
    password: '',
  },
  mounted() {
    return this.checkUsername(this.username);
  },
  methods: {
    checkUsername(val) {
      if (val.length < 4 || val.length > 16) {
        return {
          code: 400,
          msg: '用户名应在4-16位之间',
        };
      }
      return {
        code: 200,
        msg: '用户名校验通过',
      };
    },
  },
});

```
- 请求数据获取：
#### 若请求为http://localhost:7001/?username=2143，则vue中data中的username即获取到的值
- 获得请求后运行的方法
#### 在mounted中执行，可直接调用methods中的方法。

#### 另外也简单实现的vue-router的在eggjs的应用。请搜索egg-vue-router的npm包使用。

### 这样的方式可以让vue的前端小伙伴更轻松的服务端开发，目前版本就是有了想法试了下，欢迎志同道合的朋友一起讨论优化。