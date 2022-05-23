let section = document.querySelectorAll('.section');
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('entry.isIntersecting', entry.target.id);

      document.querySelectorAll('.nav-list__item-link').forEach(link => {
        if (link.getAttribute('href').replace('#', '') === entry.target.id) {
          link.classList.add('nav-list__item-link--active');
        } else {
          link.classList.remove('nav-list__item-link--active');
        }
      });
    }
  });
}, {
  treshold: 0.7,
});

section.forEach(item => {
  observer.observe(item);
});

document.querySelector('.nav-list').addEventListener('click', (e) => {
  if (e.target.matches('.nav-list__item-link')) {
    console.log('clicked');
  }
});

