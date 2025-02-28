import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
import { FilterProvider } from "@/context/FilterContext";
import AnimationWrapper from "@/components/AnimationWrapper";
import { Metadata } from 'next';
import { defaultMetadata } from '../metadata';
import Motifs from "@/components/Motifs";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = params;

  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description[locale],
    keywords: defaultMetadata.keywords[locale],
    metadataBase: new URL('https://your-domain.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'fr': '/fr',
        'ar': '/ar'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      title: 'ZLX Architecture',
      description: defaultMetadata.description[locale],
      siteName: 'ZLX Architecture',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ZLX Architecture'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ZLX Architecture',
      description: defaultMetadata.description[locale],
      images: ['/og-image.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({ children, params }) {
  const { locale } = params;
  const isRtl = locale === "ar";

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="relative">
        <AnimationWrapper>
          <Motifs />
          <header className="max-container">
            <Nav locale={locale} isRtl={isRtl} />
          </header>
          <main className="max-container">
            <NextIntlClientProvider>
              <FilterProvider>
                {children}
              </FilterProvider>
            </NextIntlClientProvider>
          </main>
          <Footer />
        </AnimationWrapper>
      </body>
    </html>
  );
}
