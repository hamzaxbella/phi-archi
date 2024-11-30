// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Locale = any;

export interface LocaleParams {
  locale: Locale;
}

export interface LocalizedString {
  en?: string;
  fr?: string;
  ar?: string;
}

export interface SanityProject {
  title: LocalizedString;
  description: LocalizedString;
}


// lib/interface.ts
export interface Filter {
  currentSlug : string,
  title : string
}

export interface SideMenuProps {
  filters: Filter[];
}
