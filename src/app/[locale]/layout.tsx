import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
import { FilterProvider } from "@/context/FilterContext";
export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
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
      </body>
    </html>
  );
}
