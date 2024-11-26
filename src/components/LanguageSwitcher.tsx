'use client';
import { routing, Link, usePathname } from '@/i18n/routing';
import { useState } from 'react';

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname(); // Get the current path
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Define language options
  const languages = routing.locales.map((locale) => ({
    code: locale,
    name: locale.toUpperCase(),
  }));

  // Toggle dropdown on mobile
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className='relative'>
      {/* Mobile View: Show only the selected language */}
      <div className="lg:hidden">
        <div 
          className="p-2 cursor-pointer"
          onClick={toggleDropdown} // Toggle dropdown visibility
        >
          <span className={`font-bold`}>
            {languages.find(lang => lang.code === locale)?.name}
          </span>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 z-10">
            {languages
              .filter(({ code }) => code !== locale) // Exclude current language
              .map(({ code, name }) => (
                <Link key={code} href={pathname} locale={code}>
                  <div className="p-2 hover:bg-gray-200">
                    {name}
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>

      {/* Desktop View: Show all languages inline */}
      <div className="hidden lg:flex">
        {languages.map(({ code, name }) => (
          <Link key={code} href={pathname} locale={code}>
            <div className={`p-2 ${code === locale ? 'font-bold' : ''}`}>
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
