// eslint-disable-next-line import/no-extraneous-dependencies
import i18next from 'i18next';

const translateComponent = (component) => {
  const title = component.querySelector('.banner-tittle');
  const listItems = component.querySelectorAll('.list__text');
  const links = component.querySelectorAll('.banner__link');
  const rates = component.querySelectorAll('.price__text');
  const cost = component.querySelectorAll('.price__cost');
  const priceTitle = component.querySelectorAll('.price__tittle');
  const sale = component.querySelector('.sale');
  const footerTitle = component.querySelector('.banner-footer__tittle');
  const buttonSubmit = component.querySelector('.button__big');

  title.innerText = i18next.t('Unlimited Access<br>to All Features');

  links[0].innerText = i18next.t('Restore');
  links[1].innerText = i18next.t('Terms of Use');
  links[2].innerText = i18next.t('Privacy Policy');

  listItems[0].innerText = i18next.t('Unlimited documents');
  listItems[1].innerText = i18next.t('Count mode');
  listItems[2].innerText = i18next.t('Text recognition (OCR)');

  rates[0].innerText = i18next.t('Monthly');
  rates[1].innerText = i18next.t('Annually');

  cost[0].innerHTML = i18next.t('<strong>{{price}}</strong><br>per month', { price: '$9.99' });
  cost[1].innerHTML = i18next.t('{{price}}/month', { price: '$9.99' });
  cost[2].innerHTML = i18next.t('<strong>{{price}}</strong><br>per year', { price: '$19.99' });
  cost[3].innerHTML = i18next.t('{{price}}/month', { price: '$1.66' });

  priceTitle[0].innerText = i18next.t('3 DAYS FREE');
  priceTitle[1].innerText = i18next.t('MOST POPULAR');

  sale.innerText = i18next.t('-83%');
  footerTitle.innerText = i18next.t('Auto-renewable. Cancel anytime.');
  buttonSubmit.innerText = i18next.t('Continue');
};
export default translateComponent;
