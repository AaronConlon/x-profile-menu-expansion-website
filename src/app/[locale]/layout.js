import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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

export const metadata = {
  metadataBase: new URL('https://x-profile-menu.com'),
  title: "X Profile Menu - Chrome 浏览器插件",
  description: "快速在任意推特页面通过鼠标悬停 Profile 按钮弹出快捷访问菜单。左键直接访问 Posts、Replies、Highlights、Articles、Media、Likes，右键打开 iframe 预览。",
  openGraph: {
    title: "X Profile Menu - Chrome 浏览器插件",
    description: "快速在任意推特页面通过鼠标悬停 Profile 按钮弹出快捷访问菜单。左键直接访问 Posts、Replies、Highlights、Articles、Media，右键打开 iframe 预览。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "X Profile Menu Chrome Extension",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X Profile Menu - Chrome 浏览器插件",
    description: "快速在任意推特页面通过鼠标悬停 Profile 按钮弹出快捷访问菜单。左键直接访问 Posts、Replies、Highlights、Articles、Media，右键打开 iframe 预览。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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
