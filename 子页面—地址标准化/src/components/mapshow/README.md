# MapShow 组件

## 概述

MapShow 组件是一个展示地图场景应用的交互式组件，基于 Figma 设计稿精确还原。组件展示了"场景赋能 数智升级"的主题，包含5个不同的应用场景标签页和详细的功能介绍。

## 功能特性

- ✅ **标签页切换**：支持5个不同场景的标签页切换
- ✅ **动态内容更新**：切换标签时动态更新标题、描述和标签
- ✅ **交互动画**：平滑的切换动画和悬停效果
- ✅ **响应式设计**：支持不同屏幕尺寸的适配
- ✅ **按钮交互**：主要按钮和次要按钮的点击处理

## 文件结构

```
src/components/mapshow/
├── mapshow.html              # 完整页面版本
├── mapshow-component.html    # 组件版本（可嵌入）
├── mapshow.css              # 样式文件
├── mapshow.js               # JavaScript 交互逻辑
└── README.md                # 说明文档

src/assets/img/
├── mapshow-background.png   # 背景图片
├── imp-zhongduan.png       # 终端网点布局图片
├── img-guanggao.png        # 广告位置管理图片
├── img-wuliu.png           # 物流仓储管理图片
├── img-fuwu.png            # 服务区划管理图片
└── img-fengxian.png        # 风险区域监控图片
```

## 使用方法

### 1. 直接使用完整页面

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="mapshow.css">
</head>
<body>
    <!-- 引入完整页面 -->
    <script src="mapshow.js"></script>
</body>
</html>
```

### 2. 作为组件嵌入

```html
<!-- 在现有页面中嵌入组件 -->
<link rel="stylesheet" href="components/mapshow/mapshow.css">

<div class="page-content">
    <!-- 其他内容 -->
    
    <!-- 嵌入 MapShow 组件 -->
    <div id="mapshow-container">
        <!-- 这里插入 mapshow-component.html 的内容 -->
    </div>
    
    <!-- 其他内容 -->
</div>

<script src="components/mapshow/mapshow.js"></script>
```

### 3. JavaScript API 使用

```javascript
// 获取组件实例
const mapShow = window.mapShowInstance;

// 切换到指定标签
mapShow.setActiveTab('wuliu');

// 获取当前选中的标签
const currentTab = mapShow.getCurrentTab();

// 获取标签数据
const tabData = mapShow.getTabData('guanggao');

// 更新标签数据
mapShow.updateTabData('guanggao', {
    title: '新的标题',
    description: '新的描述',
    tags: ['新标签1', '新标签2']
});
```

## 标签页数据

组件包含以下5个标签页：

### 1. 终端网点布局 (zhongduan)
- **标题**：终端网点布局
- **描述**：通过智能算法分析，优化终端网点布局，提升服务覆盖率和运营效率
- **标签**：网点分析、覆盖优化、效率提升

### 2. 广告位置管理 (guanggao) - 默认选中
- **标题**：广告位置管理
- **描述**：借助等时圈、缓冲区等工具，广告投放位置及辐射范围一目了然
- **标签**：投放分析、人群分析、潜力分析

### 3. 物流仓储管理 (wuliu)
- **标题**：物流仓储管理
- **描述**：智能规划仓储布局，优化物流配送路径，降低运营成本
- **标签**：仓储规划、路径优化、成本控制

### 4. 服务区划管理 (fuwu)
- **标题**：服务区划管理
- **描述**：科学划分服务区域，合理配置资源，提升服务质量和客户满意度
- **标签**：区域划分、资源配置、服务优化

### 5. 风险区域监控 (fengxian)
- **标题**：风险区域监控
- **描述**：实时监控风险区域，预警潜在问题，保障业务安全稳定运行
- **标签**：风险监控、预警系统、安全保障

## 样式说明

### 主要颜色
- **主色调**：#0055FF (蓝色渐变)
- **文字颜色**：#1A1A1A (标题)、#383838 (副标题)、#575757 (正文)
- **背景色**：白色到浅蓝色渐变
- **边框色**：#D1D1D1

### 字体
- **字体家族**：PingFang SC, Microsoft YaHei, sans-serif
- **标题字号**：34px (主标题)、24px (内容标题)、18px (副标题)
- **正文字号**：16px (正文)、14px (标签)

### 尺寸
- **组件总尺寸**：1440px × 904px
- **标签页尺寸**：236px × 140px
- **地图详情区域**：1260px × 470px

## 交互效果

1. **标签页悬停**：鼠标悬停时向上移动2px
2. **标签页切换**：点击时切换active状态，更新内容
3. **按钮悬停**：主按钮悬停时向上移动并添加阴影
4. **内容切换动画**：透明度和位移的平滑过渡

## 响应式适配

组件支持响应式设计：
- **≤ 1440px**：缩放至90%
- **≤ 1200px**：缩放至80%
- **≤ 1000px**：缩放至70%

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 注意事项

1. 图片资源已统一存储在 `src/assets/img/` 目录中，CSS 文件使用相对路径 `../../assets/img/` 引用
2. 组件依赖 PingFang SC 字体，建议提供字体回退方案
3. 组件使用了 CSS Grid 和 Flexbox，注意浏览器兼容性
4. JavaScript 使用了 ES6+ 语法，旧版浏览器需要 polyfill

## 更新日志

### v1.0.0 (2025-07-23)
- ✅ 初始版本发布
- ✅ 基于 Figma 设计稿完整还原
- ✅ 实现标签页切换功能
- ✅ 添加交互动画效果
- ✅ 支持响应式设计

## 开发者

基于 Figma AI Bridge 工具从设计稿自动生成，并进行了功能增强和优化。