## Redux(5)如何组织 Action 和 Reducer

#### 标准redux action的问题

1. 所有的 action 在一个文件
2. action 和 reduer 分开，需要来回切换
3. 系统中有哪些 action 不直观

#### 单个action 和reducer放同一个文件

拆分 action 和 reducer，将对应的action和reducer放在一起

好处：
1. 易于开发，不用来回切换文件开发
2. 易于维护，每个文件都很小，业务相关，好理解
3. 易于测试，每个业务逻辑对应一个测试文件
4. 易于理解，文件列表就是action列表

把同一个业务逻辑的 ation 和 reducer 放在一个 file 中，这样可以方便维护与管理