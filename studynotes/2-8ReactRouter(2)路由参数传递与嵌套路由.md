## ReactRouter(2)路由参数传递与嵌套路由

#### 通过URL传递参数

1. 如何通过URL传递参数：
    ```html
    <Route path="/topic/:id" ... />
    ```

2. 如何获取参数:this.props.match.params

3. https://github.com/pillarjs/path-to-regexp

####   嵌套路由

1. 每个 React 组件都可 以是路由容器
2. React Router 的声明 式语法可以方便的定义 嵌套路由