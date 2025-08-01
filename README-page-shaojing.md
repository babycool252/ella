# 个人介绍页面 (page-shaojing)

这是一个为 Shopify Ella 主题创建的个人介绍页面模板。

## 📁 文件结构

```
templates/
└── page.shaojing.json          # 页面模板文件

sections/
└── page-shaojing.liquid        # 页面区块文件

assets/
└── component-page-shaojing.css # 样式文件

locales/
└── zh-CN.json                  # 中文语言文件（已添加翻译）
```

## 🚀 如何使用

### 1. 在 Shopify 后台创建页面

1. 登录 Shopify 后台
2. 进入 "在线商店" → "页面"
3. 点击 "添加页面"
4. 填写页面信息：
   - **标题**: 您的姓名或"关于我"
   - **内容**: 您的个人介绍内容（支持 HTML）
   - **模板**: 选择 "page.shaojing"
5. 保存页面

### 2. 自定义页面设置

在 Shopify 后台的主题编辑器中，您可以自定义以下设置：

#### 个人信息设置
- **个人头像**: 上传您的头像图片
- **姓名**: 您的姓名
- **职位**: 您的职位或头衔
- **位置**: 您所在的城市或地区
- **显示社交媒体链接**: 是否显示社交媒体图标
- **GitHub 链接**: 您的 GitHub 个人主页
- **LinkedIn 链接**: 您的 LinkedIn 个人主页
- **Twitter 链接**: 您的 Twitter 个人主页

#### 样式设置
- **容器宽度**: 选择页面容器的宽度
- **标题颜色**: 自定义页面标题颜色
- **标题字体大小**: 桌面端和移动端的标题字体大小
- **间距设置**: 调整页面各部分的上下边距

## 🎨 页面特色

### 设计特点
- **现代化设计**: 使用渐变背景和卡片式布局
- **响应式设计**: 完美适配桌面、平板和手机
- **动画效果**: 包含淡入动画和悬停效果
- **深色模式支持**: 自动适配系统深色模式

### 功能特点
- **多语言支持**: 支持中文等多种语言
- **社交媒体集成**: 支持 GitHub、LinkedIn、Twitter 链接
- **可自定义内容**: 通过 Shopify 后台轻松编辑
- **SEO 友好**: 包含完整的 SEO 元标签

## 📱 响应式设计

页面在不同设备上的显示效果：

- **桌面端 (1200px+)**: 完整布局，头像和信息并排显示
- **平板端 (768px-1199px)**: 调整布局，保持良好可读性
- **手机端 (<768px)**: 垂直布局，头像居中显示

## 🌐 多语言支持

页面支持多语言，目前包含中文翻译。如需添加其他语言，请在对应的语言文件中添加以下键值：

```json
{
  "general": {
    "page_shaojing": {
      "about_me": "关于我",
      "skills": "技能专长",
      "experience": "工作经历",
      "contact": "联系方式",
      "your_name": "您的姓名",
      "your_title": "您的职位",
      "your_location": "您的位置",
      "add_content": "在这里添加您的个人介绍内容...",
      "skill_1": "技能 1",
      "skill_2": "技能 2", 
      "skill_3": "技能 3",
      "job_title": "职位名称",
      "company_name": "公司名称",
      "job_period": "2020 - 至今",
      "job_description": "工作描述...",
      "github": "GitHub",
      "linkedin": "LinkedIn",
      "twitter": "Twitter"
    }
  }
}
```

## 🔧 自定义开发

### 修改样式
编辑 `assets/component-page-shaojing.css` 文件来自定义样式。

### 添加新功能
在 `sections/page-shaojing.liquid` 文件中添加新的功能模块。

### 添加新的设置选项
在 `sections/page-shaojing.liquid` 文件的 `{% schema %}` 部分添加新的设置选项。

## 📝 示例内容

### 页面内容示例
```html
<h3>关于我</h3>
<p>我是一名充满激情的开发者，专注于创建优秀的用户体验和高质量的代码。我热爱学习新技术，并且喜欢与团队合作解决复杂问题。</p>

<h3>技能专长</h3>
<ul>
<li>前端开发 (HTML, CSS, JavaScript)</li>
<li>后端开发 (Node.js, Python)</li>
<li>数据库设计 (MySQL, MongoDB)</li>
<li>UI/UX 设计</li>
</ul>

<h3>工作经历</h3>
<div class="experience-item">
<h4>高级前端开发者</h4>
<p class="company">ABC 科技有限公司</p>
<p class="period">2020 - 至今</p>
<p>负责公司主要产品的前端开发工作，带领团队完成多个重要项目。</p>
</div>
```

## 🐛 故障排除

### 常见问题

1. **页面不显示**: 确保在 Shopify 后台选择了正确的模板
2. **样式不加载**: 检查 CSS 文件是否正确上传到 assets 目录
3. **图片不显示**: 确保头像图片已上传到 Shopify 媒体库

### 技术支持

如果遇到问题，请检查：
- Shopify 主题编辑器中的设置
- 浏览器控制台是否有错误信息
- 文件是否正确上传到服务器

## 📄 许可证

此页面模板遵循 Shopify 主题开发的最佳实践，可自由使用和修改。 