import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";
import SimpleEmailCard from './SimpleEmailCard';
import ContactCard from './ContactCard';

export default async function ContactSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
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
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
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
            title={t('twitter.title')}
            description={t('twitter.description')}
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
            title={t('github.title')}
            description={t('github.description')}
            link={contactConfig.github}
            gradient="from-mars-green-700 to-mars-green-800"
            bgPattern="grid-pattern"
            displayText={contactConfig.socialMedia.github}
          />
        </div>

        {/* 底部统计 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.responseTime')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.responseTimeLabel')}</div>
          </div>
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.openSource')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.openSourceLabel')}</div>
          </div>
          <div className="feature-card-enter opacity-0" style={{ animationDelay: '500ms' }}>
            <div className="text-3xl font-bold text-mars-green-600 dark:text-mars-green-400 mb-2">{t('stats.community')}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('stats.communityLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
