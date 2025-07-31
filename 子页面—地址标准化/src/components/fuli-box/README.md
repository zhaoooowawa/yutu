# 福利盒子组件 (Fuli Box Component)

基于Figma设计稿还原的新人福利展示组件，具有渐变背景、动画效果和交互功能。

## 功能特性

- ✨ 高保真还原Figma设计
- 🎨 渐变文字和按钮效果
- 🖼️ 背景图片支持
- 📱 响应式设计
- 🎭 入场动画效果
- 🖱️ 按钮悬停和点击交互
- 🔧 可配置内容

## 文件结构

```
fuli-box/
├── fuli-box.html              # 完整HTML页面
├── fuli-box-component.html    # 纯组件HTML
├── fuli-box.css              # 样式文件
├── fuli-box.js               # 交互逻辑
├── fuli-background.png       # 背景图片
└── README.md                 # 说明文档
```

## 使用方法

### 1. 直接引入完整页面
```html
<!-- 直接打开 fuli-box.html 查看效果 -->
```

### 2. 作为组件集成到其他页面
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="components/fuli-box/fuli-box.css">
</head>
<body>
    <!-- 引入组件HTML -->
    <div id="fuli-container"></div>
    
    <script src="components/fuli-box/fuli-box.js"></script>
    <script>
        // 加载组件HTML
        fetch('components/fuli-box/fuli-box-component.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('fuli-container').innerHTML = html;
            });
    </script>
</body>
</html>
```

### 3. 动态配置内容
```javascript
// 获取组件实例
const fuliBox = document.querySelector('.fuli-box');
const fuliBoxInstance = new FuliBox(fuliBox);

// 更新内容
fuliBoxInstance.updateContent({
    title: '新人福利',
    description: '新客注册后免费体验saas，获取',
    highlight: '15天',
    buttonText: '立即试用'
});
```

## 设计规格

### 尺寸
- 容器宽度: 1440px
- 容器高度: 196px
- 按钮尺寸: 174px × 48px

### 颜色
- 标题渐变: #F96652 → #FF9B42
- 高亮文字渐变: #0055FF → #7167FF
- 按钮渐变: #0055FF → #7167FF
- 普通文字: #2A3347
- 按钮文字: #FFFFFF

### 字体
- 标题字体: jingdonglangzhengti2 (32px, 700)
- 高亮字体: jingdonglangzhengti2 (22px, 700)
- 普通文字: PingFang SC (20px, 400)
- 按钮文字: PingFang SC (16px, 500)

## 事件

### 自定义事件
组件会触发 `fuliBoxClick` 事件：

```javascript
document.addEventListener('fuliBoxClick', function(event) {
    console.log('福利按钮被点击', event.detail);
    // event.detail = { action: 'trial', component: 'fuli-box' }
});
```

### 按钮点击处理
```javascript
// 监听按钮点击
document.querySelector('.fuli-btn').addEventListener('click', function() {
    // 自定义处理逻辑
    window.location.href = '/trial-page';
});
```

## 响应式支持

- **桌面端 (>1440px)**: 完整显示
- **平板端 (≤1440px)**: 自适应宽度
- **移动端 (≤768px)**: 垂直布局，调整字体大小

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. 确保背景图片 `fuli-background.png` 路径正确
2. 字体文件需要正确加载（jingdonglangzhengti2, PingFang SC）
3. 组件依赖现代浏览器的CSS Grid和Flexbox支持
4. 渐变文字效果需要 `-webkit-background-clip` 支持

## 自定义样式

可以通过CSS变量自定义样式：

```css
.fuli-box {
    --primary-gradient: linear-gradient(135deg, #F96652 0%, #FF9B42 100%);
    --button-gradient: linear-gradient(135deg, #0055FF 0%, #7167FF 100%);
    --text-color: #2A3347;
    --container-width: 1440px;
    --container-height: 196px;
}
```

## 更新日志

- v1.0.0: 基于Figma设计稿初始版本
  - 完整还原设计效果
  - 添加交互动画
  - 支持响应式布局