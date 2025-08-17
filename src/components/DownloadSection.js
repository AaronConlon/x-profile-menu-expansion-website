import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function DownloadSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'download' });

  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
            <div className="w-16 h-16 bg-mars-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t('chromeStore')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('chromeStoreDesc')}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
              {t('version')}: v{contactConfig.extension.version}
            </div>
            <a
              href={contactConfig.extension.chromeWebStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-mars-green-600 hover:bg-mars-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              {t('downloadButton')}
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t('manualInstall')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('manualInstallDesc')}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
              {contactConfig.extension.manualInstall ? t('offlineSupport') : t('comingSoon')}
            </div>
            {contactConfig.extension.manualInstall ? (
              <a
                href={contactConfig.extension.manualInstall}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
              >
                {t('downloadFile')}
              </a>
            ) : (
              <button
                disabled
                className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl cursor-not-allowed opacity-70"
              >
                {t('comingSoon')}
              </button>
            )}
          </div>
        </div>

        <div className="bg-mars-green-50 dark:bg-mars-green-900/30 border border-mars-green-200 dark:border-mars-green-800 rounded-xl p-6">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <svg className="w-6 h-6 text-mars-green-600 dark:text-mars-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="font-semibold text-mars-green-800 dark:text-mars-green-300">{t('installGuide.title')}</h4>
          </div>
          <p className="text-mars-green-700 dark:text-mars-green-300 text-sm">
            {t('installGuide.description', { version: contactConfig.extension.version })}
          </p>
        </div>
      </div>
    </section>
  );
}
