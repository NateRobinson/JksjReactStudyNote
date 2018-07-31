## Redux(1): JS 状态管理框架

##### 为什么需要状态管理

如果没有一个统一的状态管理，层级多了之后那么状态的传递将会非常复杂和难以维护，有了统一的状态管理的话，一切都会变得简单

Redux 让组件通信更加容易

Redux 特性：
1. Redux 特性:Single Source of Truth   单一数据源
2. Redux 特性:可预测性    state + action = new state 不是在原来基础上修改，不可变数据
3. Redux 特性:纯函数更新store     输出结果完全取决于输入参数
