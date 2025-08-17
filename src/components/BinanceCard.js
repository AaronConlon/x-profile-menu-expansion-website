'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function BinanceCard({ binanceId = "356165885" }) {
  const t = useTranslations('donation.binance');
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // 只有在没有被点击固定时才隐藏
    if (!isCopied) {
      setIsVisible(false);
    }
  };

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(binanceId);
      setIsCopied(true);

      // 2秒后自动隐藏
      setTimeout(() => {
        setIsCopied(false);
        setIsVisible(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCardClick = (e) => {
    e.stopPropagation(); // 防止事件冒泡
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          className="w-12 h-12 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512.1 512.11m-384.07 0a384.07 384.07 0 1 0 768.14 0 384.07 384.07 0 1 0-768.14 0Z"
            fill="#171A1D"
          />
          <path
            d="M449.203 513.369l64.254-64.254 64.254 64.254-64.254 64.254zM653.662 513.37l64.254-64.254 64.254 64.254-64.254 64.254zM244.745 513.368l64.254-64.254 64.254 64.254-64.254 64.254zM346.194 411.931l166.918-166.918 64.254 64.254-166.918 166.918z"
            fill="#F5B638"
          />
          <path
            d="M616.488 476.18L449.57 309.263l64.255-64.254 166.918 166.918zM410.46 551.404l166.918 166.918-64.254 64.254-166.918-166.918z"
            fill="#F5B638"
          />
          <path
            d="M680.748 615.666L513.83 782.584l-64.254-64.254 166.918-166.918z"
            fill="#F5B638"
          />
        </svg>

        {/* Hover/Click弹出框 */}
        <div
          className={`absolute bottom-full left-1/2 transition-all duration-300 transform -translate-x-1/2 mb-2 z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
        >
          <div
            className="bg-yellow-400  text-gray-900 px-5 py-4 rounded-lg shadow-xl border border-yellow-500 whitespace-nowrap cursor-pointer hover:bg-yellow-300 transition-colors"
            onClick={handleCardClick}
          >
            <div className="text-center">
              <div className="text-xs font-medium mb-2">{t('id')}</div>
              <div
                className="text-lg font-bold font-mono mb-2 select-all bg-white/20 rounded px-2 py-1"
                onClick={handleCopyId}
                title={t('copy')}
              >
                {binanceId}
              </div>
              <div className="text-xs opacity-80 mb-2">
                {t('support')}
              </div>

              {/* 复制按钮 */}
              <button
                onClick={handleCopyId}
                className="bg-gray-900 min-w-[160px] text-yellow-400 px-3 py-1 rounded text-xs font-medium hover:bg-gray-800 transition-colors flex items-center justify-center mx-auto gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {isCopied ? t('copied') : t('copy')}
              </button>
            </div>

            {/* 小三角箭头 */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
          </div>
        </div>

        {/* 成功复制的提示 */}
        {isCopied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap animate-bounce">
            ✓ {t('copied')}
          </div>
        )}
      </div>
    </div>
  );
}
