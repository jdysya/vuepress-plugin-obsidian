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

## 三、自定义对齐方式

在`obsidian`插件`Admonition`中新增`Admonition type`,新增`right`和`center`类型,然后在`obsidian`的`外观`设置中的`mycss.css`中配置自定义样式,建议样式如下:

```css
.admonition-right .admonition-center {
    margin: 0;
    padding: 0;
}

.admonition-right>div:nth-child(2) {
    float: right;
}

.admonition-center>div:nth-child(2) {
    display: flex;
    justify-content: center;
}
```

注意:添加上述`CSS`样式,只是为了在`obsidian`中生效,显得不那么违和!

然后本插件就会自动将
````
```ad-right
居中
```
````
转换为
```
:::right
居中
:::
```

`ad-center`同理

![image-20230513094521864](https://cdn.jdysya.top/lsky/2023/05/13/1/209a330a09e3b0e3.png)



![image-20230513094531636](https://cdn.jdysya.top/lsky/2023/05/13/1/ecac787eb65d5ea6.png)

## 四、 锚点链接同步修改原始链接

主要是解决[这个问题](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/3130)

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

## 开发引入

将本项目`clone`到本地,移到对应的`.vuepress`目录下,引用方式改为

```js
// confis.js
import obsidianPlugin from "./vuepress-plugin-obsidian/src/index.ts";
export default defineUserConfig({
  //...
  plugins: [
    obsidianPlugin()
  ],
  //...
})
```
