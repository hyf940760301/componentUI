---
title: 样式展示模板
order: 4
group:
    path: /
nav:
    title: 组件
    path: /components
---

## 样式展示模板

主要用于对 css 色值的样式展示

## 适用范围

样式展示模板适用于后台系统中需要对于色值进行预览和编辑的相关功能

## 代码演示

<code src="./demos/default.tsx" />

<code src="./demos/scene.tsx" />

<code src="./demos/edit.tsx" />

## API

样式展示模板的属性说明如下：

| 参数         | 说明                                    | 类型      | 默认值 | 版本      |
| ------------ | --------------------------------------- | --------- | ------ | --------- |
| cssValue     | 色值字符串(支持预定义色，十六进制值，RGB表达式等) | string              | #fff    | 0.1.0  |
| displayModal | 样式模板展示模式                             | 'preview' \| 'edit' | preview | 0.1.0  |
| disabled     | 编辑(edit)模式下输入框的禁用                  | boolean             | false   | 0.1.0  |
| placeholder  | 编辑(edit)模式下输入框默认文本                | string              | -       | 0.1.0 |
| type         | 色值展示部分形状                             | 'circle' \| 'square' \| 'round' | round | 0.1.0 |
| size         | 色值展示部分形状大小                          | 'default' \| 'middle' \| 'large' | default | 0.1.0 |
| shadow       | 色值展示部分阴影                             | boolean                          | true    | 0.1.0 |
| width        | 文本框或输入框宽度                           | string                           | -   | 0.1.0  |
| height       | 文本框或输入框高度                           | string                           | -   | 0.1.0  |
| onInputChange | 输入框内容变化时的回调                       | function(e)                      | -   | 0.1.0  |
