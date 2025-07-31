# 3Keyboard Box 组件

基于 Figma 设计稿精确还原的三项关键特性展示组件。

## 组件概述

3Keyboard Box 组件用于展示三个关键特性项目，每个项目包含图标、标题和描述文字。组件采用水平布局，具有优雅的渐变背景和阴影效果。

## 设计规格

- **尺寸**: 1260px × 88px
- **背景**: 线性渐变 (#F9FBFF 到 rgba(255, 255, 255, 0.68))
- **阴影**: 3px 6px 18.7px rgba(27, 60, 122, 0.06)
- **圆角**: 4px
- **字体**: PingFang SC

## 文件结构

```
src/components/3keyboard-box/
├── 3keyboard-box.html              # 完整页面版本
├── 3keyboard-box.css               # 样式文件
├── 3keyboard-box.js                # JavaScript 交互逻辑
├── 3keyboard-box-component.html    # 可复用组件版本
├── icon-1.svg                      # 千万级图标
├── icon-2.svg                      # 高性能图标
├── icon-3.svg                      # 个性化图标
└── README.md                       # 说明文档
```

## 使用方法

### 1. 完整页面使用

直接打开 `3keyboard-box.html` 文件即可查看完整效果。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <link rel="stylesheet" href="3keyboard-box.css">
</head>
<body>
    <!-- 组件内容 -->
    <script src="3keyboard-box.js"></script>
</body>
</html>
```

### 2. 作为组件引入

在其他页面中引入组件：

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="./components/3keyboard-box/3keyboard-box.css">

<!-- 引入组件 HTML -->
<div id="keyboard-box-container"></div>

<!-- 引入脚本 -->
<script src="./components/3keyboard-box/3keyboard-box.js"></script>

<script>
// 动态加载组件
fetch('./components/3keyboard-box/3keyboard-box-component.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('keyboard-box-container').innerHTML = html;
    });
</script>
```

## 组件特性

### 1. 响应式设计
- 桌面端：水平布局，1260px 宽度
- 平板端：自适应宽度，保持水平布局
- 移动端：垂直布局，适配小屏幕

### 2. 入场动画
- 页面加载时依次显示各项目
- 从下方淡入效果
- 每项延迟 200ms

## JavaScript API

### 初始化
```javascript
const keyboardBox3 = new KeyboardBox3();
```

### 获取数据
```javascript
const data = keyboardBox3.getData();
console.log(data.items); // 获取所有项目数据
```

### 更新内容
```javascript
keyboardBox3.updateContent({
    items: [
        {
            icon: 'new-icon-1.svg',
            title: '新标题1',
            description: '新描述1'
        },
        // ... 更多项目
    ]
});
```

### 销毁组件
```javascript
keyboardBox3.destroy();
```

## 样式定制

### 主要 CSS 类

- `.keyboard-box-3` - 组件容器
- `.keyboard-container` - 内容容器
- `.keyboard-content` - 内容布局
- `.content-item` - 单个项目
- `.content-text` - 文本内容
- `.icon` - 图标容器
- `.h1` - 标题样式
- `.p` - 描述文字样式
- `.line` - 分隔线

### 自定义样式示例

```css
/* 修改背景渐变 */
.keyboard-container {
    background: linear-gradient(180deg, #your-color-1 0%, #your-color-2 100%);
}

/* 修改标题颜色 */
.h1 {
    color: #your-color;
}


```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. 确保图标文件路径正确
2. 组件依赖 PingFang SC 字体，建议提供备用字体
3. 移动端需要适当调整间距和字体大小
4. 建议在容器宽度小于 1280px 时使用响应式布局

## 更新日志

### v1.0.0 (2025-07-21)
- 基于 Figma 设计稿创建组件
- 实现响应式布局
- 添加交互动画效果
- 提供完整的 JavaScript API