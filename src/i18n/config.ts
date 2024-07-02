import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import esTranslation from './es/translation.json';

console.log(esTranslation)

i18next.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  interpolation: {
    escapeValue: false
  },
});