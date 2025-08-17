'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('languages');
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en-US', name: t('en-US'), flag: '🇺🇸' },
    { code: 'zh-CN', name: t('zh-CN'), flag: '🇨🇳' },
    { code: 'zh-TW', name: t('zh-TW'), flag: '🇹🇼' },
    { code: 'ja-JP', name: t('ja-JP'), flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  // 调试信息
  console.log('Current locale:', locale);
  console.log('Current language:', currentLanguage);

  const handleLanguageChange = (newLocale) => {
    setIsOpen(false);
    // 直接使用原生的 window.location 来切换语言，避免路由问题
    window.location.href = `/${newLocale}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 transition-colors duration-300 p-2 rounded-lg hover:bg-mars-green-50 dark:hover:bg-gray-800"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="hidden md:inline text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-mars-green-50 dark:hover:bg-gray-700 transition-colors duration-200 ${locale === language.code
                  ? 'bg-mars-green-100 dark:bg-gray-700 text-mars-green-800 dark:text-mars-green-300'
                  : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {locale === language.code && (
                  <svg className="w-4 h-4 ml-auto text-mars-green-600 dark:text-mars-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
