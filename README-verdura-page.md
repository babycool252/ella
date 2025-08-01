# VERDURA 珠宝品牌页面

这是一个严格按照截图实现的 VERDURA 珠宝品牌页面，使用现有的 Shopify sections 和少量自定义 sections 来构建。

## 📁 文件结构

```
templates/
└── page.verdura.json                    # 页面模板文件

sections/
├── product-category-filter.liquid        # 自定义产品分类筛选 section
└── [其他现有 sections]                   # 使用现有的 sections

assets/
└── component-product-category-filter.css # 产品分类筛选样式文件
```

## 🎯 页面结构（严格按照截图）

### 1. **Hero Banner** - 主视觉区域
- **Section**: `custom-image-banner`
- **功能**: 展示品牌主视觉，包含"Heritage of Style"标题和"DISCOVER THE COLLECTION"副标题
- **背景**: 金色吊灯和白色花朵的虚化背景

### 2. **Heritage Continuation** - 延续区域
- **Section**: `custom-image-banner`
- **功能**: 延续主视觉主题，展示穿着黑色平底鞋的脚部特写

### 3. **Necklaces Section** - 项链展示区
- **Section**: `product-category-filter` (自定义)
- **功能**: 
  - 左侧筛选菜单：BRACELETS、EARRINGS、RINGS、BROOCHES、NECKLACES
  - 右侧产品轮播：展示三款项链产品
  - 导航箭头：左右切换功能

### 4. **Zodiac Section** - 星座系列
- **Section**: `spotlight-block`
- **功能**: 左右对称布局，展示星座系列产品
- **内容**: "Zodiac"标题、"DISCOVER YOUR SIGN"副标题、产品描述和购买按钮

### 5. **Lifestyle Section** - 生活方式展示
- **Section**: `custom-image-banner`
- **功能**: 四宫格图片网格，展示佩戴珠宝的模特生活照

### 6. **Very Verdura Section** - 特色产品
- **Section**: `spotlight-block`
- **功能**: 展示"Very Verdura"系列产品
- **内容**: "GIFTS FOR EVERY OCCASION"副标题和产品描述

### 7. **Visit Section** - 门店信息
- **Section**: `spotlight-block`
- **功能**: 左侧文字信息，右侧门店图片
- **内容**: 预约信息、地址和"BOOK AN APPOINTMENT"按钮

### 8. **New Arrivals Section** - 新品上市
- **Section**: `product-block`
- **功能**: 展示新品轮播，包含三款新品

### 9. **Heritage Story Section** - 品牌故事
- **Section**: `spotlight-block`
- **功能**: 左侧历史照片，右侧品牌故事文字
- **内容**: "THE VERDURA STORY"和品牌历史介绍

### 10. **Newsletter Section** - 订阅区域
- **Section**: `newsletter`
- **功能**: 邮件订阅功能
- **内容**: "Sign up now"标题和订阅表单

## 🚀 如何使用

### 1. 在 Shopify 后台创建页面

1. 登录 Shopify 后台
2. 进入 "在线商店" → "页面"
3. 点击 "添加页面"
4. 填写页面信息：
   - **标题**: "VERDURA NEW YORK"
   - **内容**: 可留空或添加页面描述
   - **模板**: 选择 "page.verdura"
5. 保存页面

### 2. 自定义页面内容

在 Shopify 后台的主题编辑器中，您可以自定义以下内容：

#### Hero Banner 设置
- 上传主视觉背景图片
- 调整标题和副标题文字
- 设置文字对齐方式

#### 产品分类筛选设置
- 添加/编辑产品分类
- 上传产品图片
- 设置产品标题和价格
- 配置导航箭头

#### 各个 Section 设置
- 上传产品图片
- 编辑文字内容
- 调整按钮链接
- 设置背景颜色和样式

## 🎨 设计特色

### 色彩方案
- **主色调**: 白色、浅粉色、金色
- **背景**: 渐变和纯色背景
- **文字**: 黑色和深灰色

### 布局特点
- **响应式设计**: 完美适配桌面、平板、手机
- **现代化布局**: 使用网格和弹性布局
- **优雅排版**: 精心设计的字体层次和间距

### 交互效果
- **悬停动画**: 产品卡片悬停效果
- **平滑滚动**: 产品轮播平滑切换
- **渐变过渡**: 页面元素淡入动画

## 📱 响应式设计

### 桌面端 (1200px+)
- 完整布局展示
- 左侧筛选菜单固定
- 产品网格三列显示

### 平板端 (768px-1199px)
- 筛选菜单转为水平滚动
- 产品网格两列显示
- 保持良好可读性

### 手机端 (<768px)
- 垂直布局
- 产品网格单列显示
- 优化触摸交互

## 🔧 自定义开发

### 修改现有 Sections
所有 sections 都使用了现有的 Shopify sections，您可以通过主题编辑器进行自定义：

1. **custom-image-banner**: 用于 Hero Banner 和生活方式展示
2. **spotlight-block**: 用于产品展示和文字内容
3. **product-block**: 用于产品列表展示
4. **newsletter**: 用于邮件订阅功能

### 自定义 Section
只有 `product-category-filter` 是自定义的 section，用于实现左侧筛选功能。

### 添加新功能
如需添加新功能，可以：
1. 在现有 sections 中添加新的 blocks
2. 创建新的自定义 sections
3. 修改 CSS 样式文件

## 📝 内容建议

### 图片要求
- **Hero Banner**: 建议尺寸 1920x800px
- **产品图片**: 建议尺寸 400x400px
- **生活方式图片**: 建议尺寸 600x600px
- **门店图片**: 建议尺寸 800x600px

### 文字内容
- 使用品牌一致的字体和颜色
- 保持简洁优雅的文案风格
- 确保所有按钮都有明确的行动号召

### SEO 优化
- 为所有图片添加 alt 标签
- 使用描述性的页面标题
- 添加结构化数据标记

## 🐛 故障排除

### 常见问题

1. **页面不显示**: 确保选择了正确的模板 "page.verdura"
2. **图片不显示**: 检查图片是否已上传到 Shopify 媒体库
3. **样式不正确**: 确保 CSS 文件已正确加载
4. **响应式问题**: 检查浏览器开发者工具中的响应式设置

### 技术支持

如果遇到问题，请检查：
- Shopify 主题编辑器中的设置
- 浏览器控制台是否有错误信息
- 文件是否正确上传到服务器
- 网络连接是否正常

## 📄 技术实现

### 使用的 Sections
- `custom-image-banner`: 4 个区块
- `spotlight-block`: 4 个区块
- `product-block`: 2 个区块
- `newsletter`: 1 个区块
- `product-category-filter`: 1 个自定义区块

### 自定义功能
- 产品分类筛选
- 响应式产品轮播
- 自定义导航箭头
- 平滑滚动效果

### 性能优化
- 图片懒加载
- CSS 和 JS 文件异步加载
- 响应式图片优化
- 浏览器缓存支持

## 📄 许可证

此页面模板遵循 Shopify 主题开发的最佳实践，可自由使用和修改。所有使用的 sections 都来自现有的 Ella 主题，确保兼容性和稳定性。 