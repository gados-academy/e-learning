import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import PT_BR from './locales/pt-br.json';
import EN_US from './locales/en-us.json';

const resources = {
  'pt-BR': {
    common: PT_BR,
  },
  'en-US': {
    common: EN_US,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: ['common'],
  defaultNS: 'common',
  keySeparator: ':',
  lng: localStorage.getItem('@i18n') || navigator.language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
