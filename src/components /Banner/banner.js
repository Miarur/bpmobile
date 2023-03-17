// eslint-disable-next-line import/no-extraneous-dependencies
import i18next from 'i18next';
import './banner.css';
import Banner from './banner.html';
import htmlToElement from '../../utils/htmlToElement';
import translateComponent from '../../utils/translateComponent';
import setUserLang from '../../utils/setLanguage';
import langEn from '../../localizations/en.json';
import langEs from '../../localizations/es.json';
import langFr from '../../localizations/fr.json';
import langJa from '../../localizations/ja.json';
import langNl from '../../localizations/nl.json';
import langRu from '../../localizations/ru.json';
import langZh from '../../localizations/zh.json';

i18next.init({
  lng: 'en',
  debug: true,
  fallbackNS: 'common',
  resources: {
    en: {
      translation: langEn,
    },
    es: {
      translation: langEs,
    },
    fr: {
      translation: langFr,
    },
    ja: {
      translation: langJa,
    },
    nl: {
      translation: langNl,
    },
    ru: {
      translation: langRu,
    },
    zh: {
      translation: langZh,
    },
  },
});

setUserLang();
const banner = htmlToElement(Banner);
translateComponent(banner);

export default banner;
