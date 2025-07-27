import type {LanguageType} from "@/enums/LanguageType.ts";

export type Locale = 'pl' | 'en'

export interface Language {
  type: LanguageType;
  flagSvg: string;
  locale: Locale;
}
