const fixedTarget = document.querySelector('#fixed-target');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      fixedTarget.style.position = 'static';
    } else {
      fixedTarget.style.position = 'fixed';
    }
  });
});

observer.observe(document.querySelector('#box'));
