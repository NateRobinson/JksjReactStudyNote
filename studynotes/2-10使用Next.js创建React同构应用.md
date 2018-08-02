## 使用Next.js创建React同构应用

#### 什么是同构应用

SSR？

#### 使用 Next 创建一个demo

[https://github.com/jiemo525/NextJsDemo](https://github.com/jiemo525/NextJsDemo)

1. 页面就是 pages 目录下的一个组件
2. static 目录映射静态文件
3. page 具有特殊静态方法 getInitalProps

#### 在页面中可以使用其他react 组件

1. 页面也是标准的node模块，可以使用其他的react组件
2. 页面会针对性的打包， 仅包含其引入的组件

#### 使用Link实现同构路由

1. “next/link” 定义链接
2. 点击链接页面不会刷新
3. 使用prefetch预加载目标资源
4. 使用replace 属性替换URL

#### 动态加载页面

```js
import dynamic from 'next/dynamic'

const DynamicCustomComponent = dynamic(
    import('../components/CustomComponent')
)

....

// 动态加载的组件
<DynamicCustomComponent />

```