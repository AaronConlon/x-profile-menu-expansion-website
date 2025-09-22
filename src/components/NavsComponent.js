'use client';

import { Clapperboard, HandCoins, HardDriveDownload, HomeIcon, Mail, ZapIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const NavsComponent = () => {
  const t = useTranslations('navigation');
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { id: 'hero', icon: <HomeIcon />, label: t('hero') },
    { id: 'features', icon: <ZapIcon />, label: t('features') },
    { id: 'demo', icon: <Clapperboard />, label: t('demo') },
    { id: 'contact', icon: <Mail />, label: t('contact') },
    { id: 'donation', icon: <HandCoins />, label: t('donation') },
    { id: 'download', icon: <HardDriveDownload />, label: t('download') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化当前区域

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 考虑固定头部
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-transparent dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 transition-all duration-300 ${isHovered ? 'px-4 py-3' : 'px-2 py-3'
        }`}>
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center transition-all duration-300 rounded-lg ${isHovered ? 'w-full px-3 py-2' : 'w-10 h-10 justify-center'
                } ${activeSection === item.id
                  ? 'bg-mars-green-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-mars-green-100 dark:hover:bg-mars-green-900/30 hover:text-mars-green-600 dark:hover:text-mars-green-400'
                }`}
              title={!isHovered ? item.label : undefined}
            >
              <span className={`text-lg transition-all duration-300 ${isHovered ? 'mr-3' : ''
                }`}>
                {item.icon}
              </span>

              {isHovered && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}

              {/* Skeleton 风格的指示器（只在未悬停时显示） */}
              {!isHovered && activeSection === item.id && (
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-mars-green-500 rounded-full"></div>
              )}

              {/* 悬停时的工具提示（只在未展开时显示） */}
              {!isHovered && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* 进度指示器 */}
        <div className={`mt-4 transition-all duration-300 ${isHovered ? 'block' : 'hidden'
          }`}>
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
            {t('progress')}
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="bg-mars-green-500 h-1.5 rounded-full transition-all duration-300"
              style={{
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavsComponent;
