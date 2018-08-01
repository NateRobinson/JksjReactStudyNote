## Redux(4)理解异步 Action，Redux 中间件

#### Redux 中间件 middleware

1. 截获 action

判断的依据是这个action是不是一个promise，是不是一个函数，如果是一个函数回去执行他

2. 发出 action

promise执行完毕，会去发一个action

#### 小结

1. 异步 action 不是特殊 action，而是多个同步 action 的组合使用
2. 中间件在 dispatcher 中截获 action 做特殊处理


