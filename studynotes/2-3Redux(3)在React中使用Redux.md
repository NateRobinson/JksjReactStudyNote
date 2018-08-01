## Redux(3)在 React 中使用 Redux

redux 是一个独立于 ui 框架之外的状态管理框架

```js
import {  connect } from 'rect-redux'

class SlidePannel extends Component{
    // ....
}

// 这玩意的作用就是让组件可以访问 Redux 的 State
function mpStateToProps(state){
    return {
        nextgen: state.nextgen,
        router: state.router
    }
}

// 这玩意的作用就是让组件可以访问 Redux 的 Action
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ ...actions}, dispatch)
    }
}

// 高阶组件
const ConnectedSlidePannel = connect(mpStateToProps, mapDispatchToProps)(SlidePannel)

export default class Sample extends Component {
    render(){
        return (
            <Provider store={store}>
                <ConnectedSlidePannel />
            </Provider> 
        )
    }
}
```

一般一个 Redux 只有一个 根节点会有这么一个 Provider 标签， 另外 store 对象就是前面用 createStore创建出来的那个 store 对象

