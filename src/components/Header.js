'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { contactConfig } from '../config/contact';
import SimpleLanguageSwitcher from './SimpleLanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-mars-gradient rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-mars-green-800 dark:text-white">{t('title')}</h1>
              <p className="text-xs text-mars-green-600 dark:text-gray-400">{t('subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* 我的博客 */}
            <a
              href={contactConfig.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{t('blog')}</span>
            </a>

            {/* Chrome 商店 */}
            <a
              href={contactConfig.extension.chromeWebStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04zM8.91 8.91h6.18c.83 0 1.5.67 1.5 1.5v3.18c0 .83-.67 1.5-1.5 1.5H8.91c-.83 0-1.5-.67-1.5-1.5v-3.18c0-.83.67-1.5 1.5-1.5zm3.09-4.37c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm-3.84 1.46c.29-.29.77-.29 1.06 0s.29.77 0 1.06-.77.29-1.06 0-.29-.77 0-1.06zm7.68 0c.29.29.29.77 0 1.06s-.77.29-1.06 0-.29-.77 0-1.06.77-.29 1.06 0z" />
              </svg>
              <span>{t('chromeStore')}</span>
            </a>

            {/* GitHub 源码 */}
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>{t('sourceCode')}</span>
            </a>

            {/* Language Switcher */}
            <SimpleLanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <span className="sr-only">打开菜单</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mt-2">
              <a
                href={contactConfig.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{t('blog')}</span>
              </a>

              <a
                href={contactConfig.extension.chromeWebStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 7.568l-4.292 7.432a4.8 4.8 0 01-8.32-4.8 4.8 4.8 0 014.8-4.8h7.812zM12 2.4c2.122 0 4.078.69 5.662 1.86L12 12l-5.662-7.74C7.922 3.09 9.878 2.4 12 2.4zM4.8 12c0-1.325.36-2.566.985-3.632L12 16.8l-6.215-7.432C5.16 9.434 4.8 10.675 4.8 12z" />
                </svg>
                <span>{t('chromeStore')}</span>
              </a>

              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-mars-green-700 dark:text-mars-green-400 hover:text-mars-green-900 dark:hover:text-mars-green-300 hover:bg-mars-green-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>{t('sourceCode')}</span>
              </a>

              <div className="px-3 py-2">
                <SimpleLanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
