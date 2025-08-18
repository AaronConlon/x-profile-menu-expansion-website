import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function HeroSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <section id="hero" className="relative px-6 pt-32 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <div className="w-20 h-20 bg-mars-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
            {t('title')}
          </h1>
          <p className="text-xl leading-8 text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            {t('description')}
          </p>

          {/* 核心功能展示区 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto group/container">
            {/* 左键功能 */}
            <div className="relative group cursor-pointer transform transition-all duration-700 group-hover/container:scale-95 hover:!scale-110 feature-card-enter opacity-0" style={{ animationDelay: '100ms' }}>
              {/* 背景装饰 */}
              <div className="absolute inset-0 rounded-2xl opacity-20 dots-pattern transition-all duration-500 group-hover:opacity-30 group-hover:scale-110"></div>

              {/* 主卡片 */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:border-blue-200 dark:group-hover:border-blue-600">

                {/* 图标区域 */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:transform group-hover:rotate-6 group-hover:scale-110">
                    <div className="transition-transform duration-500 group-hover:scale-125">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                  </div>

                  {/* 浮动粒子效果 */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping"></div>
                  <div className="absolute -top-2 left-1/2 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-bounce delay-100"></div>
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse delay-200"></div>
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 text-center group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {t('leftClick.title')}
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-all duration-300 text-center group-hover:text-gray-700 dark:group-hover:text-gray-200">
                  {t('leftClick.description')}
                </p>

                {/* 图片滑动区域 - 从右到左 */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10">
                  <div className="absolute top-0 right-0 w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800">
                    <img src="/x1.png" alt="Demo" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 底部装饰线 */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-b-2xl w-0 group-hover:w-full"></div>

                {/* 悬浮指示器 */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* 光晕效果 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse group-hover:scale-125"></div>
            </div>

            {/* 右键功能 */}
            <div className="relative group cursor-pointer transform transition-all duration-700 group-hover/container:scale-95 hover:!scale-110 feature-card-enter opacity-0" style={{ animationDelay: '200ms' }}>
              {/* 背景装饰 */}
              <div className="absolute inset-0 rounded-2xl opacity-20 hexagon-pattern transition-all duration-500 group-hover:opacity-30 group-hover:scale-110"></div>

              {/* 主卡片 */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:border-emerald-200 dark:group-hover:border-emerald-600">

                {/* 图标区域 */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:transform group-hover:rotate-6 group-hover:scale-110">
                    <div className="transition-transform duration-500 group-hover:scale-125">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>

                  {/* 浮动粒子效果 */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping"></div>
                  <div className="absolute -top-2 left-1/2 w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-bounce delay-100"></div>
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse delay-200"></div>
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 text-center group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                  {t('rightClick.title')}
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-all duration-300 text-center group-hover:text-gray-700 dark:group-hover:text-gray-200">
                  {t('rightClick.description')}
                </p>

                {/* 图片滑动区域 - 从左到右 */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10">
                  <div className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800">
                    <img src="/x2.png" alt="Demo" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 底部装饰线 */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500 rounded-b-2xl w-0 group-hover:w-full"></div>

                {/* 悬浮指示器 */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* 光晕效果 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse group-hover:scale-125"></div>
            </div>
          </div>

          {/* 状态保持特性强调 */}
          <div className="bg-gradient-to-r from-mars-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12 border-2 border-mars-green-200 dark:border-mars-green-700">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mars-gradient rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-mars-green-800 dark:text-mars-green-200">{t('stateKeeping.title')}</h3>
              </div>
            </div>
            <p className="text-lg text-mars-green-700 dark:text-mars-green-300 max-w-4xl mx-auto leading-relaxed">
              {t('stateKeeping.description')}
            </p>
          </div>

          {/* 快速统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('quickStats.hoverTime')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('quickStats.hoverTimeLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('quickStats.menuOptions')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('quickStats.menuOptionsLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('quickStats.stateKeeping')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('quickStats.stateKeepingLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('quickStats.privacy')}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('quickStats.privacyLabel')}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href={contactConfig.extension.chromeWebStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-mars-gradient px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-mars-gradient-dark transition-all duration-300 hover:scale-105"
            >
              {t('downloadButton')}
            </a>
            <a
              href="#demo"
              className="rounded-xl border-2 border-mars-green-300 dark:border-mars-green-600 px-8 py-4 text-lg font-semibold text-mars-green-700 dark:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-mars-green-800 transition-all duration-300"
            >
              {t('demoButton')}
            </a>
            <a
              href="#contact"
              className="rounded-xl border-2 border-mars-green-400 dark:border-mars-green-500 px-8 py-4 text-lg font-semibold text-mars-green-600 dark:text-mars-green-400 hover:bg-mars-green-100 dark:hover:bg-mars-green-700 transition-all duration-300"
            >
              {t('contactButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
