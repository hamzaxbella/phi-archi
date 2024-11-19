'use client';
import { routing, Link, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const pathname = usePathname(); // Get the current path
  
  // Define language options
  const languages = routing.locales.map((locale) => ({
    code: locale,
    name: locale.toUpperCase(),
  }));

  return (
    <div>
      {languages.map(({ code, name }) => (
        <Link key={code} href={pathname} locale={code}>
          <button>{name}</button>
        </Link>
      ))}
    </div>
  );
}
