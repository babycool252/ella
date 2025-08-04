# New Arrivals Jewelry 组件使用指南

## 概述

这是一个专为首饰网站设计的精美New Arrivals展示组件，采用现代化的设计风格，突出产品图片展示，提供流畅的轮播体验。

## 功能特点

### 🎨 设计特色
- **精美布局**：采用截图中的风格，突出产品图片
- **响应式设计**：完美适配桌面、平板和移动设备
- **优雅动画**：流畅的悬停效果和过渡动画
- **高质量展示**：优化的图片加载和显示效果

### 🚀 交互功能
- **轮播展示**：支持左右箭头导航
- **自动播放**：可选的自动轮播功能
- **指示点**：直观的轮播进度指示
- **快速操作**：快速查看和愿望清单功能
- **键盘支持**：完整的无障碍访问支持

### 📱 响应式特性
- **桌面端**：同时显示3个产品
- **平板端**：同时显示2个产品
- **移动端**：同时显示1个产品

## 文件结构

```
sections/
├── new-arrivals-jewelry.liquid    # 主组件模板
assets/
├── component-new-arrivals-jewelry.css    # 样式文件
├── new-arrivals-jewelry.js        # JavaScript功能
templates/
└── page.new-arrivals.json         # 示例页面模板
```

## 使用方法

### 1. 在页面中添加组件

在Shopify主题编辑器中：
1. 进入页面编辑器
2. 点击"添加section"
3. 选择"New Arrivals Jewelry"
4. 配置相关设置

### 2. 配置设置

#### 基本设置
- **Section Title**: 组件标题（默认：New Arrivals）
- **Section Subtitle**: 副标题（默认：Discover our latest jewelry collection）
- **Collection**: 选择要展示的产品集合
- **Number of Products**: 显示的产品数量（3-12个）

#### 轮播设置
- **Show Navigation Arrows**: 显示导航箭头
- **Show Dots Indicator**: 显示指示点
- **Enable Autoplay**: 启用自动播放
- **Autoplay Speed**: 自动播放速度（2-10秒）

#### 颜色设置
- **Background Color**: 背景颜色
- **Text Color**: 文字颜色
- **Accent Color**: 强调色（用于按钮、标签等）

#### 间距设置
- **Desktop/Tablet/Mobile Margins**: 各设备端的上下边距

## 样式定制

### CSS变量
组件使用CSS变量，可以轻松定制：

```css
.new-arrivals-jewelry {
  --bg-color: #ffffff;        /* 背景颜色 */
  --text-color: #333333;      /* 文字颜色 */
  --accent-color: #d4af37;    /* 强调色 */
}
```

### 主要样式类
- `.new-arrivals-jewelry`: 主容器
- `.section-header`: 标题区域
- `.products-carousel`: 轮播容器
- `.product-card`: 产品卡片
- `.product-image-wrapper`: 图片容器
- `.product-info`: 产品信息

## JavaScript功能

### 主要功能
- **轮播控制**：前进、后退、跳转到指定位置
- **自动播放**：可配置的自动轮播
- **响应式适配**：根据屏幕大小调整显示数量
- **交互事件**：快速查看、愿望清单等

### 事件监听
组件会触发以下自定义事件：
- `quick-view-open`: 快速查看打开时
- `wishlist-toggle`: 愿望清单状态改变时

## 最佳实践

### 1. 图片优化
- 使用高质量的产品图片（建议600x600像素）
- 确保图片背景简洁，突出产品本身
- 启用图片懒加载以提高性能

### 2. 产品标签
- 为新品添加"new"标签
- 为促销产品设置对比价格
- 标签会自动显示在图片左上角

### 3. 性能优化
- 限制显示的产品数量（建议6-8个）
- 启用自动播放时设置合适的间隔时间
- 在移动设备上考虑禁用自动播放

### 4. 无障碍访问
- 所有交互元素都有适当的ARIA标签
- 支持键盘导航
- 提供焦点指示器

## 浏览器兼容性

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ 移动端浏览器

## 故障排除

### 常见问题

1. **轮播不工作**
   - 检查JavaScript文件是否正确加载
   - 确认产品数量是否足够

2. **图片不显示**
   - 检查产品是否有主图片
   - 确认图片URL是否正确

3. **样式不正确**
   - 检查CSS文件是否正确加载
   - 确认没有CSS冲突

### 调试模式
在浏览器控制台中，组件会输出调试信息：
```javascript
console.log('New Arrivals Jewelry initialized');
```

## 更新日志

### v1.0.0
- 初始版本发布
- 基本轮播功能
- 响应式设计
- 快速查看和愿望清单功能

## 技术支持

如需技术支持或功能建议，请联系开发团队。

---

**注意**：此组件专为首饰网站设计，特别适合展示珠宝、手表等精美产品。 