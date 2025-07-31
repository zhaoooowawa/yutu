# Yewei-Box 页脚组件

## 组件描述

Yewei-Box 是一个功能完整的页脚组件，包含产品链接、解决方案、关于我们、友情链接、资讯信息、联系方式和二维码等多个区域。该组件基于 Figma 设计稿精确还原，提供了丰富的交互功能和动画效果。

## 功能特性

- ✅ **多区域布局**: 包含产品、解决方案、关于我们、友情链接、资讯、联系方式和二维码等7个功能区域
- ✅ **交互功能**: 支持链接点击、电话拨打、邮件发送等交互
- ✅ **动画效果**: 入场动画、悬停效果、点击反馈等
- ✅ **响应式设计**: 适配不同屏幕尺寸
- ✅ **二维码展示**: 公众号二维码与Logo组合展示
- ✅ **联系信息**: 支持电话和邮箱的点击交互
- ✅ **版权信息**: 底部版权声明区域

## 文件结构

```
yewei-box/
├── yewei-box.html              # 完整页面版本
├── yewei-box-component.html    # 组件版本（推荐使用）
├── yewei-box.css              # 样式文件
├── yewei-box.js               # 交互逻辑
├── qr-code-56586a.png         # 二维码图片
└── README.md                  # 组件文档
```

## 使用方法

### 1. 基础使用

```html
<!-- 引入样式文件 -->
<link rel="stylesheet" href="src/components/yewei-box/yewei-box.css">

<!-- 引入组件HTML -->
<div id="footer-container"></div>

<!-- 引入JavaScript -->
<script src="src/components/yewei-box/yewei-box.js"></script>

<script>
// 加载组件
fetch('src/components/yewei-box/yewei-box-component.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-container').innerHTML = html;
    });
</script>
```

### 2. 直接使用完整页面

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="src/components/yewei-box/yewei-box.css">
</head>
<body>
    <!-- 直接使用完整的HTML文件内容 -->
    <script src="src/components/yewei-box/yewei-box.js"></script>
</body>
</html>
```

## 组件结构

### 主要区域

1. **产品区域** (`.yewei-product`)
   - 地址标准化、企业制图、智能分单等产品链接
   - 双列布局展示

2. **解决方案区域** (`.yewei-slove`)
   - 零售连锁、智慧物流、金融等行业解决方案

3. **与图优势区域** (`.yewei-prepond`)
   - 企业优势介绍链接

4. **关于我们区域** (`.yewei-aboutus`)
   - 走进与图、新闻中心等链接

5. **友情链接区域** (`.yewei-other`)
   - 京东物流、物流街等合作伙伴链接

6. **与图资讯区域** (`.yewei-news`)
   - 最新资讯文章
   - 联系方式（电话、邮箱）

7. **二维码区域** (`.yewei-QRgorup`)
   - 公众号二维码
   - 与图Logo
   - 关注提示文字

8. **版权信息区域** (`.yewei-box-banquan`)
   - 版权声明
   - 分割线

## 交互功能

### 链接点击事件

```javascript
// 监听链接点击事件
document.addEventListener('yeweiBoxLinkClick', function(event) {
    const { category, linkText, component } = event.detail;
    console.log(`点击了${category}分类下的${linkText}链接`);
});
```

### 联系方式交互

- **电话号码**: 移动端自动拨打，桌面端复制到剪贴板
- **邮箱地址**: 自动打开邮件客户端

### 动画效果

- **入场动画**: 使用 Intersection Observer 实现滚动触发动画
- **悬停效果**: 链接悬停时的位移效果
- **点击反馈**: 点击时的动画反馈

## 样式定制

### 主要CSS变量

```css
.yewei-box {
    --primary-color: #2A3347;      /* 主要文字颜色 */
    --secondary-color: #44516A;    /* 次要文字颜色 */
    --light-color: #606E8A;        /* 浅色文字 */
    --background-gradient: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
}
```

### 响应式断点

- **1440px+**: 标准桌面布局
- **1200px-1440px**: 适配中等屏幕
- **1200px以下**: 紧凑布局

## API 方法

### YeweiBox 类方法

```javascript
const yeweiBox = new YeweiBox(container);

// 更新联系信息
yeweiBox.updateContactInfo({
    phone: '400-123-4567',
    email: 'contact@example.com'
});

// 销毁组件
yeweiBox.destroy();
```

## 设计规范

### 尺寸规格

- **组件总宽度**: 1440px
- **组件总高度**: 448px
- **内容区域高度**: 352px
- **版权区域高度**: 46px

### 字体规范

- **标题字体**: PingFang SC, 18px, 400
- **链接字体**: PingFang SC, 14px, 400
- **版权字体**: PingFang SC, 14px, 300

### 颜色规范

- **主标题**: #2A3347
- **链接文字**: #44516A
- **版权信息**: #606E8A
- **背景渐变**: #F5F5F5 → #FFFFFF

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 更新日志

### v1.0.0 (2025-07-29)
- 🎉 初始版本发布
- ✅ 基于 Figma 设计稿完整还原
- ✅ 实现所有交互功能
- ✅ 添加响应式支持
- ✅ 完善动画效果

## 注意事项

1. **图片路径**: 确保二维码图片 `qr-code-56586a.png` 路径正确
2. **字体支持**: 建议在项目中引入 PingFang SC 字体
3. **事件处理**: 根据实际需求配置链接跳转逻辑
4. **移动端适配**: 在移动端使用时建议进一步优化布局

## 技术支持

如有问题或建议，请联系开发团队。