import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.name,
    template: `%s | ${metaData.name}`,
  },
  description: metaData.description,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning={true}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen max-w-full">
            {/* Navbar */}
            <header className="w-full px-6 sm:px-4 md:px-0 max-w-[624px] md:max-w-3xl lg:max-w-4xl mx-auto mt-2 md:mt-6">
              <Navbar />
            </header>
            
            {/* Main Content - Takes up remaining space */}
            <main className="flex-1 w-full px-6 sm:px-4 md:px-0 max-w-[624px] md:max-w-3xl lg:max-w-4xl mx-auto py-8 md:py-12">
              {children}
            </main>
            
            {/* Footer */}
            <footer className="w-full px-6 sm:px-4 md:px-0 max-w-[624px] md:max-w-3xl lg:max-w-4xl mx-auto mb-20">
              <Footer />
            </footer>
            
            {/* <Analytics />
            <SpeedInsights /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}