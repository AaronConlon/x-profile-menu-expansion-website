'use client';

import { useState } from 'react';

export default function InteractiveFeatureCard({
  icon,
  title,
  description,
  gradient,
  bgPattern,
  delay = 0,
  demo
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${isActive ? 'z-20' : 'z-10'
        }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {/* 背景装饰 */}
      <div className={`absolute inset-0 rounded-3xl opacity-20 ${bgPattern} transition-all duration-500 ${isHovered ? 'opacity-30 scale-110' : ''
        }`}></div>

      {/* 主卡片 */}
      <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 overflow-hidden ${isHovered ? 'shadow-2xl border-mars-green-200 dark:border-mars-green-600' : ''
        } ${isActive ? 'ring-2 ring-mars-green-400 shadow-mars-green-100' : ''}`}>

        {/* 图标区域 */}
        <div className="relative mb-6 flex justify-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-r ${gradient} ${isHovered ? 'transform rotate-6 scale-110' : ''
            }`}>
            <div className={`transition-transform duration-500 ${isHovered ? 'scale-125' : ''}`}>
              {icon}
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
          {title}
        </h3>

        {/* 描述 */}
        <p className={`text-gray-600 dark:text-gray-300 transition-all duration-300 text-center ${isHovered ? 'text-gray-700 dark:text-gray-200' : ''
          }`}>
          {description}
        </p>

        {/* 展开内容 */}
        <div className={`mt-4 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          {demo && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="text-sm text-mars-green-600 dark:text-mars-green-400 font-medium mb-2">
                💡 演示效果：
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {demo}
              </div>
            </div>
          )}
        </div>

        {/* 底部装饰线 */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 rounded-b-3xl ${isHovered ? 'w-full' : 'w-0'
          }`}></div>

        {/* 悬浮指示器 */}
        {isHovered && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-mars-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* 光晕效果 */}
      {isHovered && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-mars-green-400/20 to-mars-green-600/20 blur-xl -z-10 animate-pulse"></div>
      )}
    </div>
  );
}
