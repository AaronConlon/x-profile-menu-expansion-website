'use client';

import { useState } from 'react';

export default function SimpleEmailCard({
  email,
  delay = 0
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`mailto:${email}`}
      className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 block`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 背景装饰 */}
      <div className={`absolute inset-0 rounded-3xl opacity-20 hexagon-pattern transition-all duration-500 ${isHovered ? 'opacity-30 scale-110' : ''
        }`}></div>

      {/* 主卡片 */}
      <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 overflow-hidden ${isHovered ? 'shadow-2xl border-mars-green-200 dark:border-mars-green-600' : ''
        }`}>

        {/* 图标区域 */}
        <div className="relative mb-6 flex justify-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-r from-mars-green-500 to-mars-green-600 ${isHovered ? 'transform rotate-6 scale-110' : ''
            }`}>
            <div className={`transition-transform duration-500 ${isHovered ? 'scale-125' : ''}`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* 浮动粒子效果 */}
          {isHovered && (
            <>
              <div className="absolute top-0 right-0 w-2 h-2 bg-mars-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 left-1/2 w-1 h-1 bg-mars-green-300 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-mars-green-500 rounded-full animate-pulse delay-200"></div>
            </>
          )}
        </div>

        {/* 标题 */}
        <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 text-center ${isHovered ? 'text-mars-green-700 dark:text-mars-green-300' : ''
          }`}>
          邮箱联系
        </h3>

        {/* 描述 */}
        <p className={`text-gray-600 dark:text-gray-300 transition-all duration-300 text-center mb-6 ${isHovered ? 'text-gray-700 dark:text-gray-200' : ''
          }`}>
          有任何问题或建议，欢迎随时发邮件给我。我会尽快回复您的消息。
        </p>

        {/* 联系按钮 */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-mars-green-500 text-mars-green-600 bg-white dark:bg-gray-800 dark:text-mars-green-400 dark:border-mars-green-400 font-medium text-sm transition-all duration-300 hover:bg-mars-green-50 dark:hover:bg-mars-green-900/20">
            立即联系
          </div>
        </div>

        {/* 底部装饰线 */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-mars-green-500 to-mars-green-600 transition-all duration-500 rounded-b-3xl ${isHovered ? 'w-full' : 'w-0'
          }`}></div>

        {/* 悬浮指示器 */}
        {isHovered && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-mars-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* 光晕效果 */}
      {isHovered && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-mars-green-400/20 to-mars-green-600/20 blur-xl -z-10 animate-pulse"></div>
      )}
    </a>
  );
}
