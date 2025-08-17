import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
          url: "/og.png",
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
      images: ["/og.png"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
