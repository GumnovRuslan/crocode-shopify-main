import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/sections";
import { HeaderThemeProvider } from "@/contexts/HeaderThemeContext";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getTranslations } from "next-intl/server";
import "@/styles/index.scss";
import '@/styles/root.scss';

const geistInter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale()
  const t = await getTranslations('Seo')

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (
    locale === 'en' 
    ? 'https://www.crocode.com' 
    : locale === 'pl' 
    ? 'https://www.crocode.pl' 
    : ''
   )

  return {
    title: {
      default: 'Crocode',
      template: `%s | Crocode`
    },
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    openGraph: {
      siteName: "Crocode",
      locale: locale,
      type: "website",
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: baseUrl,
      images: [
        {
          url: locale == 'en' ? `${baseUrl}/openGraph-image-en.webp` : `${baseUrl}/openGraph-image-pl.webp`,
          width: 1200,
          height: 630,
          alt: "Crocode — Shopify Experts"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      site: "@crocode",
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      images: [locale == 'en' ? `${baseUrl}/openGraph-image-en.webp` : `${baseUrl}/openGraph-image-pl.webp`]
    },

    alternates: {
      languages: {
        en: "https://www.crocode.com",
        pl: "https://www.crocode.pl"
      }
    },

    metadataBase: new URL(baseUrl),
    category: "eCommerce Development"
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className={geistInter.variable}>
        <HeaderThemeProvider>
          <NextIntlClientProvider>
            <Header/>
            <main className="main">
              {children}
            </main>
            <Footer/>
          </NextIntlClientProvider>
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
