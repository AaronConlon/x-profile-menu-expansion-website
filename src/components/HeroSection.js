import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function HeroSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <section id="hero" className="relative px-6 pt-32 pb-20 lg:px-8">
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
            {t('title')}
          </h1>
          <p className="text-xl leading-8 text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('description')}
          </p>
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
