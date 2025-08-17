import { getTranslations } from 'next-intl/server';
import { contactConfig } from "../config/contact";
import CopyButton from './CopyButton';
import BinanceCard from './BinanceCard';

export default async function DonationSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'donation' });

  return (
    <section id="donation" className="py-20 bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('message')}
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
            {t('addressTitle')}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('networksSupport')}: {contactConfig.donation.evmNetworks.join("、")}
          </p>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <code className="text-sm text-gray-800 dark:text-gray-200 break-all font-mono">
                {contactConfig.evmAddress}
              </code>
              <CopyButton
                textToCopy={contactConfig.evmAddress}
                className="ml-4 bg-mars-green-500 hover:bg-mars-green-600 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                title={t('copyButton')}
              />
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {t('copyTip')}
          </p>

          {/* 币安支持 */}
          <BinanceCard binanceId="356165885" />
        </div>

        <div className="bg-mars-green-50 dark:bg-mars-green-900/30 border border-mars-green-200 dark:border-mars-green-800 rounded-xl p-6">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <svg className="w-6 h-6 text-mars-green-600 dark:text-mars-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h4 className="font-semibold text-mars-green-800 dark:text-mars-green-300">{t('thankYouTitle')}</h4>
          </div>
          <p className="text-mars-green-700 dark:text-mars-green-300 text-sm">
            {t('thankYouMessage')}
          </p>
        </div>
      </div>
    </section>
  );
}
