import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";

export default async function FooterSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
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
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-mars-green-800 dark:text-white">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-mars-green-600 dark:text-gray-400">
              <li><a href="#features" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('features')}</a></li>
              <li><a href="#demo" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('demo')}</a></li>
              <li><a href="#contact" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('contact')}</a></li>
              <li><a href="#download" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('downloadInstall')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-mars-green-800 dark:text-white">{t('externalLinks')}</h4>
            <ul className="space-y-2 text-mars-green-600 dark:text-gray-400">
              <li><a href={contactConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('githubSource')}</a></li>
              <li><a href={contactConfig.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('followX')}</a></li>
              <li><a href={contactConfig.blog} target="_blank" rel="noopener noreferrer" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('blog')}</a></li>
              <li><a href="#donation" className="hover:text-mars-green-800 dark:hover:text-white transition-colors">{t('supportDonation')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mars-green-200 dark:border-gray-800 mt-8 pt-8 text-center text-mars-green-600 dark:text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
