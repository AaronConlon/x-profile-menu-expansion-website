import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function PrivacyPolicySection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-mars-green-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-mars-green-800 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-mars-green-600 dark:text-gray-400">
            {t('lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-mars-green-800 dark:text-white mb-4">
              {t('introduction.title')}
            </h2>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('introduction.content')}
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-mars-green-800 dark:text-white mb-4">
              {t('dataCollection.title')}
            </h2>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-4">
              {t('dataCollection.content')}
            </p>
          </section>

          {/* No Data Collection */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('noDataCollection.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('noDataCollection.content')}
            </p>
          </section>

          {/* Local Operation */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('localOperation.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('localOperation.content')}
            </p>
          </section>

          {/* Website Interaction */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('websiteInteraction.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('websiteInteraction.content')}
            </p>
          </section>

          {/* Browser Permissions */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('permissions.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-4">
              {t('permissions.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-mars-green-600 dark:text-gray-300 ml-4">
              <li>{t('permissions.list.0')}</li>
              <li>{t('permissions.list.1')}</li>
            </ul>
          </section>

          {/* Third Party Services */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('thirdParty.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('thirdParty.content')}
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('dataRetention.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('dataRetention.content')}
            </p>
          </section>

          {/* Security */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('security.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('security.content')}
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('updates.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('updates.content')}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('contact.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-6">
              {t('contact.content')}
            </p>

            {/* Contact Icons */}
            <div className="flex items-center justify-center space-x-6">
              {/* Email Icon */}
              <a
                href={`mailto:${contactConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-mars-green-50 dark:bg-mars-green-900/20 hover:bg-mars-green-100 dark:hover:bg-mars-green-900/40 border border-mars-green-200 dark:border-mars-green-700 hover:border-mars-green-300 dark:hover:border-mars-green-600 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg"
                title={contactConfig.email}
              >
                <svg
                  className="w-6 h-6 text-mars-green-600 dark:text-mars-green-400 group-hover:text-mars-green-700 dark:group-hover:text-mars-green-300 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                href={contactConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-mars-green-50 dark:bg-mars-green-900/20 hover:bg-mars-green-100 dark:hover:bg-mars-green-900/40 border border-mars-green-200 dark:border-mars-green-700 hover:border-mars-green-300 dark:hover:border-mars-green-600 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg"
                title={contactConfig.socialMedia.twitter}
              >
                <svg
                  className="w-5 h-5 text-mars-green-600 dark:text-mars-green-400 group-hover:text-mars-green-700 dark:group-hover:text-mars-green-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </section>

          {/* Consent */}
          <section className="border-t border-mars-green-200 dark:border-gray-700 pt-8">
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed text-center font-medium">
              {t('consent.content')}
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a
            href={`/${locale}`}
            className="inline-flex items-center px-6 py-3 bg-mars-gradient hover:bg-gradient-to-r hover:from-mars-green-600 hover:to-mars-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToHome')}
          </a>
        </div>
      </div>
    </div>
  );
}
