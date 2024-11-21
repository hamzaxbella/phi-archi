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