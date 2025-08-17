import { getTranslations } from 'next-intl/server';
import ImageCarousel from './ImageCarousel';

export default async function DemoSection({ locale }) {
  const t = await getTranslations({ locale, namespace: 'demo' });

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('operationTitle')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('step1.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('step1.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('step2.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('step2.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-mars-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('step3.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('step3.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="h-80 w-full">
              <ImageCarousel
                images={[
                  { src: "/x1.png", alt: t('imageAlt1') },
                  { src: "/x2.png", alt: t('imageAlt2') }
                ]}
                interval={5000}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('imageCaption')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
