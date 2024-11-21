import { NextIntlClientProvider } from 'next-intl';
// import { LocaleParams } from '@/lib/interface';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// interface Props {
//   children: React.ReactNode;
//   params: {
//     locale: any;
//   };
// }

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale }  = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <header>
          <LanguageSwitcher />
        </header>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}