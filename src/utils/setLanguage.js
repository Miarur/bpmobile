// eslint-disable-next-line import/no-extraneous-dependencies
import i18next from 'i18next';

const setUserLang = () => {
  const getQueryValue = window.location.search.slice(-2);
  switch (getQueryValue) {
    case 'es':
      i18next.changeLanguage('es');
      break;
    case 'fr':
      i18next.changeLanguage('fr');
      break;
    case 'ja':
      i18next.changeLanguage('ja');
      break;
    case 'nl':
      i18next.changeLanguage('nl');
      break;
    case 'ru':
      i18next.changeLanguage('ru');
      break;
    default:
      i18next.changeLanguage('en');
      break;
  }
};

export default setUserLang;
