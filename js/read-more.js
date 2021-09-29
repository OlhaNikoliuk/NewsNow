const btnReadMore = document.querySelectorAll('[data-read-more]');

btnReadMore.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.add('is-hidden');
  })
);
