const contentTblBtn = document.querySelector('[data-content-button]');
const contentMunuRef = document.querySelector('[data-content-menu]');

contentTblBtn.addEventListener('click', () => {
  contentTblBtn.classList.toggle('is-visible');
  contentMunuRef.classList.toggle('is-visible');
});
