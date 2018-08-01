## Redux(6)理解不可变数据 (Immutability)

不可变数据其实指的是，不能直接修改它的值，只能通过复制修改产生一个新的对象

####  为什么需要不可变数据

1. 性能优化 所有的变化都是由 action 触发，在旧的 state 基础上产生一个新的 state， 不需要比较值，只需要比较两个对象的引用是否相等，来决定是否要更新组件，达到了性能优化的目的
2. 易于调试和跟踪 可以方便的计算 diff
3. 易于推测，在任何时刻都可以推测 store 会变成什么

#### 如何操作不可变数据

1. 原生写法：{...}, Object.assign  es6 语法

```js
const state = {
    filters: 'completed',
    todos: [
        'Learn React'
    ]
}

const newState = {
    ...state,
    todos: [
        ...state.todos,
        'Learn Redux'
    ]
}

const newState2 = Object.assign({}, state, {
    todos: [
        ...state.todos,
        'Learn Redux'
    ]
})
```

2. immutability-helper

更新的数据的节点比较深的话，使用这个工具类比较适合

```js
import update from 'immutability-helper'

const state = {
    filters: 'completed',
    todos: [
        'Learn React'
    ]
}

const newState = update(state, {
    todos: {
        $push: ['Learn Redux']
    }
})
```

3. immer

用操作原生数据的方式操作不可变数据，性能较上面两个弱一点

```js
import produce from 'immer'

const state = {
    filters: 'completed',
    todos: [
        'Learn React'
    ]
}

const newState = produce(state, draftState => {
    draftState.todos.push('Learn Redux')
})

```

