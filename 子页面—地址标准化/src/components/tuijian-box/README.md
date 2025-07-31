# 内容推荐组件 (tuijian-box)

基于Figma设计稿还原的内容推荐组件，展示三个推荐卡片，包含智能路径功能介绍和服务商认证信息。

## 组件结构

```
src/components/tuijian-box/
├── tuijian-box.html              # 完整HTML页面
├── tuijian-box-component.html    # 可复用组件版本
├── tuijian-box.css              # 样式文件
├── tuijian-box.js               # 交互逻辑
├── tuijian-box-background.png   # 背景图片
├── card-image-1-56586a.png      # 卡片1和2的图片
├── card-image-3-56586a.png      # 卡片3的图片
└── README.md                    # 说明文档
```

## 设计特点

### 布局结构
- **整体尺寸**: 1440px × 655px
- **标题区域**: 居中显示主标题和副标题
- **卡片布局**: 三个并排的推荐卡片
- **背景**: 使用从Figma导出的背景图片

### 卡片内容
1. **卡片1 & 2**: 智能路径功能介绍
   - 标题: "智能路径"
   - 标签: "超级算力"、"实时路况"、"一站式规划"
   - 描述: "精准批量算路，一站式路径规划，出行降本增效"
   - 操作: "查看详情"

2. **卡片3**: 服务商认证信息
   - 标题: "荣获中国家电服务业TOP10服务提供商"
   - 描述: 京东物流相关介绍
   - 操作: "联系我们"

## 样式规范

### 颜色规范
- 主标题: `#1A1A1A`
- 副标题: `#383838`
- 卡片标题: `#383838`
- 标签文字: `#575757`
- 描述文字: `#949494`
- 标签背景: `#F1F4FD`
- 卡片背景: `#FFFFFF`

### 字体规范
- 字体族: PingFang SC
- 主标题: 600 weight, 34px
- 副标题: 400 weight, 18px
- 卡片标题: 600 weight, 20px
- 标签文字: 400 weight, 16px
- 描述文字: 400 weight, 14px

### 间距规范
- 卡片间距: 21px
- 卡片内边距: 20px
- 标签间距: 8px
- 内容区域间距: 12px

## 交互功能

### 鼠标悬停效果
- **卡片悬停**: 向上移动5px，增强阴影效果
- **按钮悬停**: 箭头图标向右移动2px
- **过渡动画**: 0.3s ease 过渡效果

### 点击交互
- **查看详情**: 卡片1和2的操作按钮
- **联系我们**: 卡片3的操作按钮
- **点击反馈**: 按钮缩放动画效果

### 入场动画
- **标题**: 淡入 + 向上移动动画
- **卡片**: 依次出现的淡入 + 向上移动动画
- **时序**: 标题200ms后开始，卡片400ms后依次间隔200ms出现

## 响应式设计

### 断点设置
- **≤ 1440px**: 整体缩放至80%
- **≤ 1200px**: 缩放至70%，卡片垂直排列
- **≤ 768px**: 缩放至50%

### 布局调整
- 大屏幕: 三卡片水平排列
- 中等屏幕: 卡片垂直排列，居中显示
- 小屏幕: 保持垂直排列，进一步缩放

## 使用方法

### 1. 直接使用完整页面
```html
<!-- 直接打开 tuijian-box.html -->
<link rel="stylesheet" href="tuijian-box.css">
<script src="tuijian-box.js"></script>
```

### 2. 作为组件引入
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="components/tuijian-box/tuijian-box.css">

<!-- 引入组件HTML -->
<div id="tuijian-container">
    <!-- 这里插入 tuijian-box-component.html 的内容 -->
</div>

<!-- 引入脚本 -->
<script src="components/tuijian-box/tuijian-box.js"></script>
```

### 3. 自定义配置
```javascript
// 可以通过修改 tuijian-box.js 中的内容来自定义交互行为
const tuijianBox = new TuijianBox();

// 自定义点击事件处理
tuijianBox.showCardDetails = function(cardIndex, cardTitle) {
    // 自定义详情展示逻辑
    window.location.href = `/details/${cardIndex}`;
};
```

## 技术特性

### CSS特性
- Flexbox布局
- CSS3动画和过渡
- 响应式媒体查询
- 精确的定位和尺寸控制

### JavaScript特性
- ES6类语法
- 事件委托
- 动画控制
- 响应式处理
- 模块化设计

### 兼容性
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 支持移动端触摸交互
- 响应式设计适配各种屏幕尺寸

## 开发说明

### 图片资源
- 所有图片均从Figma设计稿中导出
- 使用PNG格式保证图片质量
- 图片已经过裁剪和优化处理

### 样式实现
- 严格按照Figma设计稿的尺寸、颜色、字体进行还原
- 使用相对单位和百分比实现响应式
- 保持与其他组件的样式一致性

### 交互实现
- 提供丰富的鼠标交互效果
- 支持键盘导航（可扩展）
- 具备良好的用户体验

## 更新日志

### v1.0.0 (2025-07-29)
- 基于Figma设计稿完成组件开发
- 实现完整的HTML、CSS、JavaScript功能
- 添加响应式设计支持
- 完成交互动画效果
- 提供完整的文档说明