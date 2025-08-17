import { getTranslations } from 'next-intl/server';
import InteractiveFeatureCard from './InteractiveFeatureCard';

export default async function FeaturesSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'features' });

  return (
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
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
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
            title={t('hoverMenu.title')}
            description={t('hoverMenu.description')}
            gradient="from-mars-green-500 to-mars-green-600"
            bgPattern="hexagon-pattern"
            demo={t('hoverMenu.demo')}
          />

          <InteractiveFeatureCard
            delay={100}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            }
            title={t('dualMode.title')}
            description={t('dualMode.description')}
            gradient="from-mars-green-600 to-mars-green-700"
            bgPattern="dots-pattern"
            demo={t('dualMode.demo')}
          />

          <InteractiveFeatureCard
            delay={200}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            }
            title={t('openSource.title')}
            description={t('openSource.description')}
            gradient="from-mars-green-700 to-mars-green-800"
            bgPattern="waves-pattern"
            demo={t('openSource.demo')}
          />

          <InteractiveFeatureCard
            delay={300}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title={t('privacy.title')}
            description={t('privacy.description')}
            gradient="from-mars-green-600 to-mars-green-700"
            bgPattern="grid-pattern"
            demo={t('privacy.demo')}
          />

          <InteractiveFeatureCard
            delay={400}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title={t('lightweight.title')}
            description={t('lightweight.description')}
            gradient="from-mars-green-500 to-mars-green-600"
            bgPattern="triangles-pattern"
            demo={t('lightweight.demo')}
          />
        </div>

        {/* 底部统计 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '500ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.responseTime')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.responseTimeLabel')}</div>
          </div>
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '600ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.options')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.optionsLabel')}</div>
          </div>
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '700ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.privacy')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.privacyLabel')}</div>
          </div>
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.free')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.freeLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
