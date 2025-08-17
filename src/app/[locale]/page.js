import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../../config/contact";
import CopyButton from "../../components/CopyButton";
import ImageCarousel from "../../components/ImageCarousel";
import InteractiveFeatureCard from "../../components/InteractiveFeatureCard";
import ContactCard from "../../components/ContactCard";
import SimpleEmailCard from "../../components/SimpleEmailCard";
import Header from "../../components/Header";

export default async function Home() {
  const t = await getTranslations();
  return (
    <div className="min-h-screen bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-mars-green-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="w-20 h-20 bg-mars-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href={contactConfig.extension.chromeWebStore}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-mars-gradient px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-mars-gradient-dark transition-all duration-300 hover:scale-105"
              >
                免费使用 ❤️
              </a>
              <a
                href="#demo"
                className="rounded-xl border-2 border-mars-green-300 dark:border-mars-green-600 px-8 py-4 text-lg font-semibold text-mars-green-700 dark:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-mars-green-800 transition-all duration-300"
              >
                观看演示
              </a>
              <a
                href="#contact"
                className="rounded-xl border-2 border-mars-green-400 dark:border-mars-green-500 px-8 py-4 text-lg font-semibold text-mars-green-600 dark:text-mars-green-400 hover:bg-mars-green-100 dark:hover:bg-mars-green-700 transition-all duration-300"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-mars-green-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-mars-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mars-gradient rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-mars-green-600 to-mars-green-800 bg-clip-text text-transparent">
              革新功能体验
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              五大核心功能特性，专为提升您的 X.com 使用体验而精心设计，让每一次交互都更加智能高效
            </p>
          </div>

          {/* 交互式功能卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <InteractiveFeatureCard
              delay={0}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="悬停快捷菜单"
              description="鼠标悬停在任意 Profile 按钮上方，即可弹出智能快捷访问菜单，包含 Posts、Replies、Highlights、Articles、Media、Likes 等选项。"
              gradient="from-mars-green-500 to-mars-green-600"
              bgPattern="hexagon-pattern"
              demo="悬停时 0.3 秒后自动显示菜单，支持键盘 ESC 键快速关闭"
            />

            <InteractiveFeatureCard
              delay={100}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              }
              title="双击访问模式"
              description="左键点击菜单项直接跳转到对应页面，右键点击则在当前页面打开 iframe 预览，灵活满足不同使用需求。"
              gradient="from-mars-green-600 to-mars-green-700"
              bgPattern="dots-pattern"
              demo="左键：新标签页打开，右键：当前页面 iframe 弹窗预览"
            />

            <InteractiveFeatureCard
              delay={200}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              }
              title="开源透明"
              description="完全开源的项目，欢迎社区贡献和改进。您可以在 GitHub 上查看源代码、提交问题和参与开发。"
              gradient="from-mars-green-700 to-mars-green-800"
              bgPattern="waves-pattern"
              demo="MIT 开源协议，支持 Fork、Star、PR 贡献，活跃的开发者社区"
            />

            <InteractiveFeatureCard
              delay={300}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="隐私安全"
              description="遵循 Chrome 扩展安全标准，不收集任何个人数据，所有操作都在本地完成，确保您的隐私和数据安全。"
              gradient="from-mars-green-600 to-mars-green-700"
              bgPattern="grid-pattern"
              demo="零数据收集，本地化处理，通过 Chrome Web Store 安全审核"
            />

            <InteractiveFeatureCard
              delay={400}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="轻量高效"
              description="占用极少系统资源，响应速度快，启动时间小于 100ms，不会影响您的浏览器性能和正常使用体验。"
              gradient="from-mars-green-500 to-mars-green-600"
              bgPattern="triangles-pattern"
              demo="内存占用 < 5MB，CPU 使用率 < 1%，支持浏览器硬件加速"
            />
          </div>

          {/* 底部统计 */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">0.3s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">菜单响应时间</div>
            </div>
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '600ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">快捷访问选项</div>
            </div>
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '700ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">隐私保护</div>
            </div>
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '800ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">免费使用</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              插件演示
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              看看 X Profile Menu 如何简化您的社交媒体体验
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                智能快捷菜单操作
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">悬停激活</h4>
                    <p className="text-gray-600 dark:text-gray-300">将鼠标悬停在任意 Profile 按钮上方，自动弹出快捷菜单</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">左键直达</h4>
                    <p className="text-gray-600 dark:text-gray-300">左键点击菜单项（Posts、Replies、Media等）直接跳转页面</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">右键预览</h4>
                    <p className="text-gray-600 dark:text-gray-300">右键点击菜单项在当前页面打开 iframe 预览，无需离开当前环境</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="h-80 w-full">
                <ImageCarousel
                  images={[
                    { src: "/x1.png", alt: "X Profile Menu 悬停菜单演示" },
                    { src: "/x2.png", alt: "X Profile Menu iframe 预览演示" }
                  ]}
                  interval={5000}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  💡 真实插件演示截图 - 悬停菜单与 iframe 预览功能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-mars-green-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-mars-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mars-gradient rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-mars-green-600 to-mars-green-800 bg-clip-text text-transparent">
              联系我
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              欢迎与我联系，分享您的想法和建议。我非常重视每一个用户的反馈，让我们一起让这个插件变得更好
            </p>
          </div>

          {/* 交互式联系卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <SimpleEmailCard
              email={contactConfig.email}
              delay={0}
            />

            <ContactCard
              delay={100}
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              title="关注我的 X"
              description="获取最新更新和技术分享，了解插件开发背后的故事和技术细节。"
              link={contactConfig.twitter}
              gradient="from-mars-green-600 to-mars-green-700"
              bgPattern="waves-pattern"
              displayText={contactConfig.socialMedia.twitter}
            />

            <ContactCard
              delay={200}
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
              title="查看源代码"
              description="完全开源的项目，欢迎社区贡献和改进。查看代码，提交 PR，一起让项目更好。"
              link={contactConfig.github}
              gradient="from-mars-green-700 to-mars-green-800"
              bgPattern="grid-pattern"
              displayText={contactConfig.socialMedia.github}
            />
          </div>

          {/* 底部统计 */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">24h</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">邮件响应时间</div>
            </div>
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">Open</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">源代码开放</div>
            </div>
            <div className="feature-card-enter opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">Active</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">活跃社区支持</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="py-20 bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            支持我
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {contactConfig.donation.message}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-mars-gradient rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              EVM 地址打赏
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              支持以下网络：{contactConfig.donation.evmNetworks.join("、")}
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <code className="text-sm text-gray-800 dark:text-gray-200 break-all font-mono">
                  {contactConfig.evmAddress}
                </code>
                <CopyButton
                  textToCopy={contactConfig.evmAddress}
                  className="ml-4 bg-mars-green-500 hover:bg-mars-green-600 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  title="复制地址"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              💡 点击右侧按钮可复制地址到剪贴板
            </p>
          </div>

          <div className="bg-mars-green-50 dark:bg-mars-green-900/30 border border-mars-green-200 dark:border-mars-green-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <svg className="w-6 h-6 text-mars-green-600 dark:text-mars-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h4 className="font-semibold text-mars-green-800 dark:text-mars-green-300">感谢您的支持</h4>
            </div>
            <p className="text-mars-green-700 dark:text-mars-green-300 text-sm">
              您的打赏将帮助我持续改进和维护这个项目，为更多用户提供更好的体验。每一份支持都是我前进的动力！
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            立即开始使用
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            免费下载 X Profile Menu，提升您的 X.com 使用体验
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="w-16 h-16 bg-mars-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Chrome 网上应用店
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                官方渠道，安全可靠，自动更新
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                当前版本：v{contactConfig.extension.version}
              </div>
              <a
                href={contactConfig.extension.chromeWebStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-mars-green-600 hover:bg-mars-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
              >
                前往下载
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                手动安装
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                下载 .crx 文件，手动安装
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                {contactConfig.extension.manualInstall ? "支持离线安装" : "即将提供下载"}
              </div>
              {contactConfig.extension.manualInstall ? (
                <a
                  href={contactConfig.extension.manualInstall}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  下载文件
                </a>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl cursor-not-allowed opacity-70"
                >
                  即将提供
                </button>
              )}
            </div>
          </div>

          <div className="bg-mars-green-50 dark:bg-mars-green-900/30 border border-mars-green-200 dark:border-mars-green-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <svg className="w-6 h-6 text-mars-green-600 dark:text-mars-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold text-mars-green-800 dark:text-mars-green-300">安装说明</h4>
            </div>
            <p className="text-mars-green-700 dark:text-mars-green-300 text-sm">
              插件已在 Chrome 网上应用店发布（版本 {contactConfig.extension.version}）。安装后，请在 X.com 页面刷新浏览器，然后将鼠标悬停在任意 Profile 按钮上即可体验智能快捷菜单。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 text-mars-green-800 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-mars-gradient rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mars-green-800 dark:text-white">X Profile Menu</h3>
              </div>
              <p className="text-mars-green-600 dark:text-gray-400 mb-4">
                简化您的 X.com 社交媒体体验，一键访问个人资料页面。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-mars-green-800 dark:text-white">快速链接</h4>
              <ul className="space-y-2 text-mars-green-600 dark:text-gray-400">
                <li><a href="#features" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#demo" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">使用演示</a></li>
                <li><a href="#contact" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">联系我</a></li>
                <li><a href="#download" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">下载安装</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-mars-green-800 dark:text-white">外部链接</h4>
              <ul className="space-y-2 text-mars-green-600 dark:text-gray-400">
                <li><a href={contactConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">GitHub 源码</a></li>
                <li><a href={contactConfig.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">关注我的 X</a></li>
                <li><a href={contactConfig.blog} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">我的博客</a></li>
                <li><a href="#donation" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">支持打赏</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mars-green-200 dark:border-gray-800 mt-8 pt-8 text-center text-mars-green-600 dark:text-gray-400">
            <p>&copy; 2024 X Profile Menu. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
