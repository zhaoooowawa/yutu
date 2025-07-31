# Keyboard Box 组件

## 概述

Keyboard Box 是一个展示地址标准化服务特色功能的组件，包含四个主要特性展示区块，采用横向布局设计。

## 功能特性

- **特色六级地址**: 更精准，更全面的地址解析
- **40亿+门址库**: 日千万级订单妥投验证自动采集更新
- **21级语义模型**: 全局标准化地址数据模型
- **99.5%地址解析准确率**: 前沿AI算法引擎，准确率行业领先

## 文件结构

```
keybord-box/
├── keyboard-box.html              # 完整页面版本
├── keyboard-box-component.html    # 组件版本（仅HTML结构）
├── keyboard-box.css              # 样式文件
├── keyboard-box.js               # JavaScript交互逻辑
├── h1-icon.svg                   # 特色六级地址图标
├── h1-icon-2.svg                 # 40亿+门址库图标
├── h1-icon-3.svg                 # 21级语义模型图标
├── h1-icon-4.svg                 # 99.5%地址解析准确率图标
└── README.md                     # 说明文档
```

## 使用方法

### 1. 完整页面使用

直接在浏览器中打开 `keyboard-box.html` 文件：

```bash
open keyboard-box.html
```

### 2. 组件集成使用

在其他页面中引入组件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>您的页面</title>
    <!-- 引入组件样式 -->
    <link rel="stylesheet" href="components/keybord-box/keyboard-box.css">
</head>
<body>
    <!-- 引入组件HTML -->
    <div id="keyboard-box-container"></div>
    
    <!-- 引入组件脚本 -->
    <script src="components/keybord-box/keyboard-box.js"></script>
    <script>
        // 加载组件HTML
        fetch('components/keybord-box/keyboard-box-component.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('keyboard-box-container').innerHTML = html;
            });
    </script>
</body>
</html>
```

## 设计规范

### 尺寸规格

- **容器宽度**: 1260px
- **容器高度**: 126px
- **内容区域**: 1220px × 86px (左右各20px边距，上下各20px边距)
- **每个内容项宽度**: 290px
- **内容项间距**: 20px
- **分隔线**: 1px × 86px

### 颜色规范

- **背景渐变**: `linear-gradient(180deg, #F9FBFF 0%, rgba(255, 255, 255, 0.68) 100%)`
- **阴影**: `3px 6px 18.7px 0px rgba(27, 60, 122, 0.06)`
- **主标题颜色**: `#1A1A1A`
- **高亮标题颜色**: `#0055FF`
- **副标题颜色**: `#717075`
- **分隔线颜色**: `#E8E8E8`

### 字体规范

- **字体族**: PingFang SC, Microsoft YaHei, sans-serif
- **主标题**: 500 weight, 20px, 1.4em line-height
- **副标题**: 400 weight, 16px, 1.4em line-height, 0.5px letter-spacing

## 响应式设计

### 桌面端 (> 1300px)
- 保持原始横向布局
- 四个内容项水平排列

### 平板端 (768px - 1300px)
- 容器宽度自适应
- 内容项调整为两行两列布局

### 移动端 (< 768px)
- 垂直堆叠布局
- 分隔线变为水平线
- 字体大小适当缩小

## JavaScript API

### 类方法

```javascript
// 初始化组件
const keyboardBox = new KeyboardBox();

// 获取组件数据
const data = keyboardBox.getData();

// 销毁组件
keyboardBox.destroy();
```

### 事件处理

- **窗口大小变化**: 自动调整布局
- **鼠标悬停**: 添加缩放效果
- **滚动动画**: 进入视口时触发动画

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. 确保图标文件路径正确
2. 在移动端测试响应式效果
3. 检查字体加载情况
4. 验证动画性能

## 更新日志

### v1.0.0 (2025-07-08)
- 初始版本发布
- 基于 Figma 设计稿完整还原
- 支持响应式布局
- 添加交互动画效果