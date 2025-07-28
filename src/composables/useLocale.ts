import { useI18n } from 'vue-i18n';
import type { Language } from '@/interfaces/Language.ts';
import { LanguageType } from '@/enums/LanguageType.ts';


export function useLocale() {
  const currentRoute = useRoute();
  const { locale } = useI18n();

  const supportedLanguages: Readonly<Language[]> = Object.freeze([
    {
      type: LanguageType.PL,
      flagSvg: "/src/assets/polish-flag.svg",
      locale: "pl",
    },
    {
      type: LanguageType.EN,
      flagSvg: "/src/assets/english-flag.svg",
      locale: "en",
    },
  ])

  const selectedLanguage = computed(() => supportedLanguages.find(language => language.locale === locale.value))

  watch(() => currentRoute.path, newPath => {
    locale.value = newPath.startsWith("/en") ? "en" : "pl"
  }, { immediate: true })

  return { selectedLanguage, supportedLanguages };
}
