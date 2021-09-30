const btnReadMore = document.querySelectorAll('[data-read-more]');

btnReadMore.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.add('is-hidden');
  })
);

const btnReadMoreTab = document.querySelectorAll('[data-read-more-table]');

btnReadMoreTab.forEach((btn) =>
  btn.addEventListener('click', () => {
    btn.classList.add('is-hidden');
  })
);
