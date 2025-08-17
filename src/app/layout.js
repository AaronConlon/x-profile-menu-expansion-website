// This layout only passes through the children since we have locale-based layouts
export const metadata = {
  metadataBase: new URL('https://x-profile-menu.com'),
  title: "X Profile Menu - Chrome Browser Extension",
  description: "Quickly hover over the Profile button on any Twitter page to pop up a quick access menu. Left-click for direct access to Posts, Replies, Highlights, Articles, Media, Likes, right-click to open iframe preview.",
  openGraph: {
    title: "X Profile Menu - Chrome Browser Extension",
    description: "Quickly hover over the Profile button on any Twitter page to pop up a quick access menu. Left-click for direct access to Posts, Replies, Highlights, Articles, Media, right-click to open iframe preview.",
    url: 'https://x-profile-menu.com',
    siteName: 'X Profile Menu',
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: 'X Profile Menu Chrome Extension',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "X Profile Menu - Chrome Browser Extension",
    description: "Quickly hover over the Profile button on any Twitter page to pop up a quick access menu. Left-click for direct access to Posts, Replies, Highlights, Articles, Media, right-click to open iframe preview.",
    images: ['/og.png'],
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
    canonical: 'https://x-profile-menu.com/en-US',
    languages: {
      'zh-CN': 'https://x-profile-menu.com/zh-CN',
      'zh-TW': 'https://x-profile-menu.com/zh-TW',
      'en-US': 'https://x-profile-menu.com/en-US',
      'ja-JP': 'https://x-profile-menu.com/ja-JP',
      'x-default': 'https://x-profile-menu.com/en-US'
    }
  }
};

export default function RootLayout({ children }) {
  return children;
}