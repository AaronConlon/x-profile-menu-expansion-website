import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function TermsOfServiceSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'terms' });

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

          {/* Use of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-mars-green-800 dark:text-white mb-4">
              {t('useOfService.title')}
            </h2>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('useOfService.content')}
            </p>
          </section>

          {/* No Account Required */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('noAccount.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('noAccount.content')}
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('intellectualProperty.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-4">
              {t('intellectualProperty.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-mars-green-600 dark:text-gray-300 ml-4">
              <li>{t('intellectualProperty.details.0')}</li>
              <li>{t('intellectualProperty.details.1')}</li>
              <li>{t('intellectualProperty.details.2')}</li>
              <li>{t('intellectualProperty.details.3')}</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('prohibitedActivities.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-4">
              {t('prohibitedActivities.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-mars-green-600 dark:text-gray-300 ml-4">
              <li>{t('prohibitedActivities.list.0')}</li>
              <li>{t('prohibitedActivities.list.1')}</li>
              <li>{t('prohibitedActivities.list.2')}</li>
              <li>{t('prohibitedActivities.list.3')}</li>
              <li>{t('prohibitedActivities.list.4')}</li>
              <li>{t('prohibitedActivities.list.5')}</li>
            </ul>
          </section>

          {/* Privacy and Data Collection */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('privacy.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed mb-4">
              {t('privacy.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-mars-green-600 dark:text-gray-300 ml-4 mb-4">
              <li>{t('privacy.details.0')}</li>
              <li>{t('privacy.details.1')}</li>
              <li>{t('privacy.details.2')}</li>
              <li>{t('privacy.details.3')}</li>
            </ul>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed italic">
              {t('privacy.reference')}
            </p>
          </section>

          {/* Free Service */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('freeService.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('freeService.content')}
            </p>
          </section>

          {/* Termination */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('termination.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('termination.content')}
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('warranties.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('warranties.content')}
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('liability.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('liability.content')}
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('indemnification.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('indemnification.content')}
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('governingLaw.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('governingLaw.content')}
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h3 className="text-xl font-semibold text-mars-green-800 dark:text-white mb-3">
              {t('changes.title')}
            </h3>
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed">
              {t('changes.content')}
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

          {/* Acceptance */}
          <section className="border-t border-mars-green-200 dark:border-gray-700 pt-8">
            <p className="text-mars-green-600 dark:text-gray-300 leading-relaxed text-center font-medium">
              {t('acceptance.content')}
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
