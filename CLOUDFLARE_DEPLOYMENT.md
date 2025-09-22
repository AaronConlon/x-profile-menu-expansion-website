# 🚀 Cloudflare Pages 部署指南

这份指南将指导您如何将 X Profile Menu 网站部署到 Cloudflare Pages。

## 📋 部署前检查清单

- ✅ Next.js 配置已更新为静态导出
- ✅ 已创建 wrangler.toml 配置文件
- ✅ 已设置重定向规则支持多语言路由
- ✅ 已配置构建脚本

## 🔧 配置文件说明

### 1. `next.config.mjs`
```javascript
const nextConfig = {
  output: 'export',      // 静态导出
  trailingSlash: true,   // URL 末尾添加斜杠
  images: {
    unoptimized: true    // 禁用图片优化（静态导出必需）
  }
};
```

### 2. `public/_redirects`
- 根据地理位置自动重定向到合适的语言版本
- 处理隐私政策和服务条款的路由
- SPA 回退支持

### 3. `wrangler.toml`
- 项目名称配置
- 生产和预览环境设置
- 输出目录指定为 `out`

## 🌐 部署方法

### 方法一：通过 Cloudflare Dashboard（推荐）

1. **连接 GitHub 仓库**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 "Pages" 部分
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 选择您的 GitHub 仓库

2. **配置构建设置**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build:cf
   Build output directory: out
   Root directory: (leave empty)
   Environment variables: NODE_VERSION=18
   ```

3. **高级设置**
   - 在 "Build configurations" 中：
     - Build command: `npm run build:cf`
     - Build output directory: `out`
   - 在 "Environment variables" 中：
     - `NODE_VERSION`: `18`
     - `NEXT_TELEMETRY_DISABLED`: `1`

4. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成（通常需要 2-5 分钟）

### 方法二：通过 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **本地构建**
   ```bash
   npm run build:cf
   ```

4. **部署到 Pages**
   ```bash
   wrangler pages deploy out --project-name x-profile-menu-website
   ```

## 🌍 自定义域名设置

1. 在 Cloudflare Dashboard 中进入您的 Pages 项目
2. 点击 "Custom domains" 标签
3. 点击 "Set up a custom domain"
4. 输入您的域名（例如：`x-profile-menu.com`）
5. 按照指示配置 DNS 记录

## 🔄 自动部署设置

部署完成后，每次推送到 GitHub 主分支时会自动触发部署：

- **主分支推送** → 生产环境更新
- **Pull Request** → 自动创建预览部署
- **分支推送** → 预览环境更新

## 🌐 多语言路由验证

部署完成后，验证以下 URL 是否正常工作：

- `https://your-domain.com/` → 根据地理位置重定向
- `https://your-domain.com/en-US/` → 英文版本
- `https://your-domain.com/zh-CN/` → 简体中文版本
- `https://your-domain.com/zh-TW/` → 繁体中文版本
- `https://your-domain.com/ja-JP/` → 日文版本
- `https://your-domain.com/en-US/privacy/` → 隐私政策
- `https://your-domain.com/en-US/terms/` → 服务条款

## 🚀 性能优化建议

1. **启用 Cloudflare 缓存**
   - 静态资源缓存：Browser TTL 设置为 1 年
   - HTML 页面缓存：设置为 1 小时

2. **开启压缩**
   - Gzip/Brotli 压缩自动启用

3. **CDN 加速**
   - 全球 CDN 自动分发静态资源

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本是否为 18+
   - 确保所有依赖都已正确安装

2. **路由不工作**
   - 检查 `_redirects` 文件是否正确复制到输出目录
   - 验证 `next.config.mjs` 中的 `trailingSlash: true` 设置

3. **图片显示问题**
   - 确保 `images.unoptimized: true` 已设置
   - 检查图片路径是否正确

### 调试命令

```bash
# 本地测试构建
npm run build:cf

# 查看输出目录结构
ls -la out/

# 本地预览构建结果
npx serve out
```

## 📊 监控和分析

部署完成后，您可以在 Cloudflare Dashboard 中查看：

- 网站访问量统计
- 性能指标
- 错误日志
- 带宽使用情况

## 🔐 安全设置

建议启用以下安全功能：

1. **HTTPS 强制重定向**
2. **HSTS（HTTP Strict Transport Security）**
3. **Content Security Policy（CSP）**
4. **X-Frame-Options**

---

🎉 现在您的 X Profile Menu 网站已成功部署到 Cloudflare Pages！享受快速、安全、全球分发的网站体验吧！
