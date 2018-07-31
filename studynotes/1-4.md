# 1-4 React 组件的生命周期及其使用场景

![生命周期图](https://github.com/NateRobinson/JksjReactStudyNote/blob/master/docimgs/smzq.png)

#### constructor

1. 可以用来初始化内部状态，不过很少使用
2. 唯一可以直接修改 state 的地方

#### getDerivedStateFromProps 是在 render 阶段

1. 当 state 需要从 props 初始化时使用
2. 尽量不要使用:维护两者状态一致性会增加复杂度
3. 每次 render 都会调用
4. 典型场景:表单控件获取默认值

#### getSnapshotBeforeUpdate  是在 pre commit 阶段

1. 在页面 render 之前调用，state 已更新
2. 典型场景:获取 render 之前的 DOM 状态

#### componentDidMount 是在 commit 阶段

1. UI 渲染完成后调用
2. 只执行一次
3. 典型场景:获取外部资源  ajax 请求之类

#### componentDidUpdate 是在 commit 阶段  更新时

1. 每次 UI 更新时被调用
2. 典型场景:页面需要根据 props 变化重新获取数据

#### shouldComponentUpdate

1. 决定 Virtual DOM 是否要重绘
2. 一般可以由 PureComponent 自动实现
3. 典型场景:性能优化

#### componentWillUnmount

1. 组件移除时被调用
2. 典型场景:资源释放












