//header

const menuHeaderBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuHeaderBtnRef.addEventListener('click', () => {
  menuHeaderBtnRef.classList.toggle('is-open');

  menuHeaderBtnRef.textContent === 'Close'
    ? (menuHeaderBtnRef.textContent = 'Menu')
    : (menuHeaderBtnRef.textContent = 'Close');

  mobileMenuRef.classList.toggle('is-open');
});

//footer
const footerNewsBtnRef = document.querySelector('[data-news-button]');
const footerMenuRef = document.querySelector('[data-footer-news]');

footerNewsBtnRef.addEventListener('click', () => {
  footerNewsBtnRef.classList.toggle('is-open');
  footerMenuRef.classList.toggle('is-open');
});

const footerCategoryBtnRef = document.querySelector('[data-category-button]');
const footerCategoryRef = document.querySelector('[data-footer-categories]');

footerCategoryBtnRef.addEventListener('click', () => {
  footerCategoryBtnRef.classList.toggle('is-open');
  footerCategoryRef.classList.toggle('is-open');
});
