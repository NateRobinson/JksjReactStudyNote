## 理解 Context API 的使用场景

#### React 16.3 新特性:Context API

1. provide
2. consume

将子布局包裹在父布局中，父布局使用 LocaleContext.Provider 将子布局 LocaleContext.Consumer。
这样子布局中可以拿到那个父布局声明的 state 属性。