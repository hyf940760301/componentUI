---
title: 状态切换
order: 7
group:
    path: /
nav:
    title: 组件
    path: /components
---

## 状态切换

主要用于对不同状态下的数据进行切换展示或者在表格中修改当前行数据状态

## 适用范围

后台系统中需要对数据进行不同状态下切换以及表格中状态栏的操作

## 代码演示

<code src="./demos/default.tsx" />

<code src="./demos/disabled.tsx" />

## API

#### StatusSwitch

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | ------ |
| defaultValue | 默认选中的值                              | any       | -      | 0.1.0  |
| value        | 设置当前选中的值                           | any       | -      | 0.1.0  |
| options      | 以配置形式设置子元素                        | <a href="#column">Column</a>[]  | -      | 0.1.0  |
| mode         | 状态切换模式选择                           | 'button' \| 'select' | button | 0.1.0 |
| type         | 选择mode为button模式下按钮样式选择          | 'outline' \| 'solid' | 'solid' | 0.1.0 |
| width        | 选择mode为select模式下容器的宽度           | string | numbver     | -       | 0.1.0  |
| onChange     | 状态变化时的回调                          | function(value, option: <a href="#option">Option</a>) | - | 0.1.0 |

#### Column

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | ------ |
| label        | 操作名                                   | string    | -      |    0.1.0  |
| value        | 操作对应的value                           | any       | -      |  0.1.0    |
| disabled     | 操作禁用                                  | boolean  | false   | 0.1.0    |

#### Option

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | ------ |
| label        | 操作名                                   | string    | -      |    0.1.0  |
| value        | 操作对应的value                           | any       | -      |  0.1.0    |
| disabled     | 操作禁用                                  | boolean  | false   | 0.1.0    |