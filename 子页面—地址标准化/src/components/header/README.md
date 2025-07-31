# 网站头部组件

这是一个基于Figma设计稿还原的网站头部组件，包含logo、导航菜单、联系电话、登录和注册按钮。

## 文件结构

- `header-component.html` - 可复用的头部组件HTML结构
- `header.css` - 头部组件样式
- `header.js` - 头部组件交互功能
- `header.html` - 完整的HTML文档，用于独立测试头部组件

## 使用方法

### 方法一：在HTML页面中引入组件

在您的HTML页面中，使用以下代码引入头部组件：

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
    <!-- 引入头部组件 -->
    <div id="header-container"></div>
    
    <script>
        // 加载头部组件
        fetch('./components/header/header-component.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            });
    </script>
    
    <!-- 页面其他内容 -->
</body>
</html>
```

### 方法二：使用iframe引入（不推荐）

```html
<iframe src="./components/header/header.html" frameborder="0" width="100%" height="70px"></iframe>
```

### 方法三：直接复制HTML结构

您也可以直接将`header-component.html`中的HTML结构复制到您的页面中，并确保正确引入CSS和JS文件。

## 自定义

### 修改导航菜单

在`header-component.html`文件中，找到以下代码，并根据需要修改导航菜单项：

```html
<nav class="nav-item">
    <div class="tab-default active">
        <div class="tab-text">
            <span class="text">首页</span>
            <div class="select"></div>
        </div>
    </div>
    
    <div class="tab-default">
        <div class="tab-text">
            <span class="text">产品</span>
            <div class="select"></div>
        </div>
        <div class="icon-menu">
            <span></span>
        </div>
    </div>
    
    <!-- 其他菜单项 -->
</nav>
```

### 修改联系电话

在`header-component.html`文件中，找到以下代码，并修改电话号码：

```html
<div class="phone">
    <div class="phone-icon">
        <div class="icon-shape"></div>
    </div>
    <div class="number">400-123-4567</div>
</div>
```

### 修改样式

您可以通过修改`header.css`文件来自定义头部组件的样式。主要样式变量包括：

- 背景色: rgba(255, 255, 255, 0.2)，带有模糊效果
- 主要文字颜色: #2A3347
- 选中状态文字颜色: 渐变色，从#0032FF到#875DFF
- 按钮颜色: 渐变色，从#4A86FF到#0357FF

## 响应式设计

该头部组件已经包含响应式设计，在移动设备上会自动切换为汉堡菜单。在屏幕宽度小于992px时，导航菜单会隐藏，并显示汉堡菜单按钮。