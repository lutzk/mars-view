import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-US.json';

const resources = {
  'en-US': {
    translation: {
      ...enUS,
    },
  },
};

void i18n.use(initReactI18next).init({
  // https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
  compatibilityJSON: 'v3',
  debug: true,
  resources,
  lng: 'en-US',
  //   lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  //   // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  //   // if you're using a language detector, do not define the lng option
  //
});

export default i18n;
