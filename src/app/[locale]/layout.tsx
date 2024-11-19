import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await the params object to resolve dynamic params
  const { locale } = await params; // Await the params to resolve the dynamic value
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Set the locale for the request
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <header>
          <LanguageSwitcher />
        </header>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
