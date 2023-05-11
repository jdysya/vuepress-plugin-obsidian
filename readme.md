# vuepress-plugin-obsidian

实现`obsidian`语法向`vuepress`的平滑过渡，灵感来源于[[windily-cloud](https://github.com/windily-cloud)/**[vuepress-plugin-obsidian](https://github.com/windily-cloud/vuepress-plugin-obsidian)**](https://github.com/windily-cloud/vuepress-plugin-obsidian)

# 功能实现

## 一、容器语法转换

实现将`obsidian`中插件`Admonition`语法转换为`vuepress`中的语法，如将

````
```ad-tip
//something
```
````

转换为

:::tip

//something

:::

主要支持的有以下几种容器类型:

1. tip
2. warning
3. note
4. info
5. danger

同时支持`Admonition`容器中的`title`和`collapse`属性

## 二、标签转换

众所周知，`obsidian`中标签很好用，本插件提供了将其转换为`vuepress`内置组件`<badage>`



![image-20230511181501086](https://cdn.jdysya.top/lsky/2023/05/11/1/d54f18ac576c8679.png)



![image-20230511181622479](https://cdn.jdysya.top/lsky/2023/05/11/1/05873071db0bac65.png)

# 使用方法

1. 在`vuepress`工程`.vuepress`目录下,新建`vuepress-plugin-obsidian`文件夹
2. 将本项目的`dist`文件夹移动至该文件夹内
3. 按照如下方式在`config.js`中引用插件

```js
import obsidianPlugin from "./vuepress-plugin-obsidian/dist";
export default defineUserConfig({
  //...
  plugins: [
    obsidianPlugin()
  ],
  //...
})
```
