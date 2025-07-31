# Banner Box 组件

这是一个基于Figma设计稿还原的Banner Box组件，包含背景图片、标题、副标题和两个按钮。

## 文件结构

- `banner-box-component.html` - 可复用的Banner Box组件HTML结构
- `banner-box.css` - Banner Box组件样式
- `banner-box.js` - Banner Box组件交互功能
- `banner-box.html` - 完整的HTML文档，用于独立测试Banner Box组件

## 使用方法

### 方法一：在HTML页面中引入组件

在您的HTML页面中，使用以下代码引入Banner Box组件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>您的页面标题</title>
    <!-- 其他头部元素 -->
</head>
<body>
    <!-- 引入Banner Box组件 -->
    <div id="banner-box-container"></div>
    
    <script>
        // 加载Banner Box组件
        fetch('./components/banner-box/banner-box-component.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('banner-box-container').innerHTML = data;
            });
    </script>
    
    <!-- 页面其他内容 -->
</body>
</html>
```

### 方法二：使用iframe引入（不推荐）

```html
<iframe src="./components/banner-box/banner-box.html" frameborder="0" width="100%" height="425px"></iframe>
```

### 方法三：直接复制HTML结构

您也可以直接将`banner-box-component.html`中的HTML结构复制到您的页面中，并确保正确引入CSS和JS文件。

## 自定义

### 修改标题和副标题

在`banner-box-component.html`文件中，找到以下代码，并根据需要修改标题和副标题：

```html
<div class="banner-content-title">
    <h1 class="h1">地址标准化</h1>
    <h2 class="h2">依托于京东海量的标准门址库，助力企业规整地址数据，释放数据价值</h2>
</div>
```

### 修改按钮文本和功能

在`banner-box-component.html`文件中，找到以下代码，并修改按钮文本：

```html
<div class="banner-content-button">
    <div class="button-primary">
        <div class="button-bg"></div>
        <span>立即试用</span>
    </div>
    <div class="button-sec">
        <span>在线咨询</span>
    </div>
</div>
```

在`banner-box.js`文件中，您可以修改按钮的点击事件处理函数来自定义按钮功能。

### 修改背景图片

如果需要更换背景图片，请替换`src/assets/img/img-dizhibiaozhunhua.png`文件，或者修改CSS中的图片路径：

```css
.img-dizhibiaozhunhua {
    background-image: url('../../assets/img/img-dizhibiaozhunhua.png');
}
```

### 修改样式

您可以通过修改`banner-box.css`文件来自定义Banner Box组件的样式。主要样式变量包括：

- 背景色: #6095FF
- 主要文字颜色: #121721
- 副标题文字颜色: #383838
- 主按钮颜色: 渐变色，从#0055FF到#7167FF
- 次要按钮颜色: #E6ECFD，边框颜色#0055FF

## 响应式设计

该Banner Box组件已经包含响应式设计，在不同屏幕尺寸下会自动调整布局和样式：

- 在屏幕宽度小于992px时，内容区域宽度调整为80%
- 在屏幕宽度小于768px时，Banner高度减小，字体大小减小，按钮改为垂直排列
- 在屏幕宽度小于480px时，进一步减小Banner高度和字体大小