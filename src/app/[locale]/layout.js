import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Inter } from "next/font/google";
import "../globals.css";

// 使用 Inter 字体作为替代，它更稳定且广泛支持
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// 等宽字体使用系统字体避免外部依赖
const mono = "ui-monospace, Menlo, Monaco, 'Cascadia Code', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Code', 'Droid Sans Mono', 'Courier New', monospace";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  // 根据locale确定OpenGraph locale
  const ogLocaleMap = {
    'zh-CN': 'zh_CN',
    'zh-TW': 'zh_TW',
    'en-US': 'en_US',
    'ja-JP': 'ja_JP'
  };

  // 根据locale确定OG图片
  const ogImageMap = {
    'zh-CN': '/zh.png',
    'zh-TW': '/tw.png',
    'en-US': '/en.png',
    'ja-JP': '/jp.png'
  };

  // 获取对应语言的OG图片，如果没有则使用默认的
  const ogImageUrl = ogImageMap[locale] || '/og.png';

  return {
    metadataBase: new URL('https://x-profile-menu-expansion-website.vercel.app'),
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('shortDescription'),
      url: `https://x-profile-menu-expansion-website.vercel.app/${locale}`,
      siteName: t('siteName'),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t('imageAlt'),
        },
      ],
      locale: ogLocaleMap[locale] || 'en_US',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('shortDescription'),
      images: [ogImageUrl],
    },
    icons: {
      icon: "/x-32.png",
      shortcut: "/x-32.png",
      apple: "/x-32.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/x-32.png",
      },
    },
    alternates: {
      canonical: `https://x-profile-menu-expansion-website.vercel.app/${locale}`,
      languages: {
        'zh-CN': 'https://x-profile-menu-expansion-website.vercel.app/zh-CN',
        'zh-TW': 'https://x-profile-menu-expansion-website.vercel.app/zh-TW',
        'en-US': 'https://x-profile-menu-expansion-website.vercel.app/en-US',
        'ja-JP': 'https://x-profile-menu-expansion-website.vercel.app/ja-JP',
        'x-default': 'https://x-profile-menu-expansion-website.vercel.app/en-US'
      }
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased font-sans`} style={{'--font-mono': mono}}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
