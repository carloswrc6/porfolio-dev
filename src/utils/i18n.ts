import en from '@/locales/en.json'
import es from '@/locales/es.json'

const translations: Record<string, any> = { en, es }
const supportedLanguages = Object.keys(translations)

export function getStaticPaths() {
  return supportedLanguages.map((lang) => ({
    params: { lang },
  }))
}

export function getTranslations(lang: string) {
  return translations[lang] || translations['en']
}
