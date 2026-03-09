import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ug from './locales/ug.json'
import zh from './locales/zh.json'
import tr from './locales/tr.json'
import ar from './locales/ar.json'

export const SUPPORTED_LANGS = ['en', 'ug', 'zh', 'tr', 'ar']
export const DEFAULT_LANG = 'en'
export const RTL_LANGS = ['ug', 'ar']

export const LANG_LABELS = {
  en: 'English',
  ug: 'ئۇيغۇرچە',
  zh: '中文',
  tr: 'Türkçe',
  ar: 'العربية',
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ug: { translation: ug },
    zh: { translation: zh },
    tr: { translation: tr },
    ar: { translation: ar },
  },
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: { escapeValue: false },
})

export default i18n
