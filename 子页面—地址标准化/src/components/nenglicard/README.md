# 能力卡片组件 (NengliCard)

基于Figma设计稿精确还原的能力展示卡片组件，展示"数据渲染"功能模块。

## 📁 文件结构

```
src/components/nenglicard/
├── nenglicard.html              # 完整页面版本
├── nenglicard-component.html    # 可复用组件版本
├── nenglicard.css              # 样式文件
├── nenglicard.js               # 交互逻辑
├── midcard-background.png      # 中等卡片背景图
├── maxcard-background.svg      # 大卡片背景图
└── README.md                   # 说明文档
```

## 🎨 设计特性

- **高保真还原**: 基于Figma设计数据精确实现
- **响应式设计**: 支持多种屏幕尺寸适配
- **交互动画**: 丰富的悬停和点击效果
- **模块化结构**: 易于维护和扩展

## 🚀 快速开始

### 方式一：直接使用完整页面
```html
<!-- 直接打开 nenglicard.html -->
<a href="src/components/nenglicard/nenglicard.html">查看完整页面</a>
```

### 方式二：作为组件引入
```html
<!-- 在其他页面中引入组件 -->
<div id="nenglicard-container"></div>

<script>
// 动态加载组件
fetch('src/components/nenglicard/nenglicard-component.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nenglicard-container').innerHTML = html;
    });
</script>
```

### 方式三：iframe嵌入
```html
<iframe 
    src="src/components/nenglicard/nenglicard.html" 
    width="1440" 
    height="1033"
    frameborder="0">
</iframe>
```

## 🎯 组件结构

### 主要区域
1. **标题区域** - 主标题和副标题
2. **中等卡片区域** - 两个并排的功能卡片
3. **大卡片区域** - 智能划区功能展示

### 核心元素
- **标题**: "数据渲染" + "灵活打点，沿路画线，自由画面"
- **中等卡片**: 包含标题、功能点列表和试用按钮
- **大卡片**: 智能划区功能，包含背景图和功能列表

## 🎨 样式说明

### 颜色规范
- 主文字色: `#383838` / `#1A1A1A`
- 副文字色: `#575757` / `#757575`
- 按钮渐变: `#0055FF` → `#7167FF`
- 功能点图标: `#FFCC49`
- 背景色: `rgba(248, 251, 255, 0.83)`

### 字体规范
- 字体族: PingFang SC
- 主标题: 34px, 600 weight
- 副标题: 18px, 400 weight
- 卡片标题: 24px, 600 weight
- 正文: 16px, 400 weight

### 尺寸规范
- 整体容器: 1440×1033px
- 中等卡片: 620×380px
- 大卡片: 1260×400px
- 按钮: 120×40px

## ⚡ 交互功能

### 动画效果
- **入场动画**: 标题和卡片依次淡入
- **悬停效果**: 卡片上浮，按钮缩放
- **点击反馈**: 按钮缩放动画
- **通知提示**: 点击按钮显示通知

### 响应式行为
- **1480px以下**: 整体缩放90%
- **1200px以下**: 缩放80%，卡片垂直排列
- **768px以下**: 缩放60%，移动端优化

## 🔧 JavaScript API

### 主要方法
```javascript
// 获取组件实例
const nengliCard = window.NengliCard;

// 更新卡片内容
nengliCard.updateCardContent({
    title: '新标题',
    subtitle: '新副标题',
    midCards: [
        {
            title: '卡片1标题',
            features: ['功能1', '功能2']
        }
    ],
    maxCard: {
        title: '大卡片标题',
        features: ['功能1', '功能2', '功能3']
    }
});

// 获取当前数据
const data = nengliCard.getCardData();
```

### 事件监听
```javascript
// 监听按钮点击
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('try-button')) {
        console.log('试用按钮被点击');
    }
});
```

## 🎨 自定义样式

### 修改颜色主题
```css
/* 修改按钮颜色 */
.try-button, .maxcard-try-button {
    background: linear-gradient(135deg, #FF5500 0%, #FF6767 100%);
}

/* 修改功能点图标颜色 */
.feature-icon {
    background-color: #49CCFF;
}
```

### 调整布局
```css
/* 修改卡片间距 */
.mid-cards-row {
    gap: 40px;
}

/* 调整容器尺寸 */
.nenglicard-container {
    width: 1200px;
    height: 900px;
}
```

## 📱 移动端适配

组件已内置响应式设计，支持：
- 桌面端 (>1200px)
- 平板端 (768px-1200px)
- 移动端 (<768px)

## 🔍 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 更新日志

### v1.0.0 (2025-07-24)
- ✨ 基于Figma设计稿完整实现
- 🎨 添加丰富的交互动画
- 📱 实现响应式设计
- 🔧 提供完整的JavaScript API
- 📖 完善的文档说明

## 🤝 贡献指南

1. 保持代码风格一致
2. 添加必要的注释
3. 测试多种屏幕尺寸
4. 更新相关文档

## 📄 许可证

MIT License