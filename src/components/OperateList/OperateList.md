---
title: 表格操作
order: 6
group:
    path: /
nav:
    title: 组件
    path: /components
---

## 表格操作

主要用于在表格行末尾的操作部分添加对应的操作列表

## 适用范围

后台系统中使用表格并且需要对表格进行操作的部分

## 代码演示

<code src="./demos/default.tsx" />

<code src="./demos/disabled.tsx" />

<code src="./demos/icon.tsx" />

<code src="./demos/table.tsx" />

## API

表格操作的属性说明如下：

#### OperateList

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | --------- |
| value        | 允许传入的当前表格对应的行值对象             | Object    | -       | 0.1.0    |
| options      | 操作列表参数配置                          | <a href="#column">Column</a>[]   | -      | 0.1.0    |
| onEditClick  | 点击时的回调函数                          | function(label: string, value: any) | - | 0.1.0 |

#### Column

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | --------- |
| label        | 操作名                                   | string    | -      |    0.1.0  |
| value        | 操作对应的value                           | any       | -      |  0.1.0    |
| disabled     | 操作禁用                                  | boolean  | false   | 0.1.0    |
| color        | 操作色值                                  | 'primary' \| 'danger' \| 'success' \| | primary |  0.1.0 |
| icon         | 操作图标                                  |  React.ReactNode | - | 0.1.0 |
