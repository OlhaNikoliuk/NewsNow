const contentLinkRef = document.querySelectorAll('.content-table__link');

contentLinkRef.forEach((link) => {
  link.addEventListener('click', () => {
    const activeLinks = document.querySelectorAll(
      '.content-table__link.is-active'
    );

    if (activeLinks) {
      activeLinks.forEach((link) => link.classList.remove('is-active'));
    }
    link.classList.add('is-active');
  });
});
