const getId = (link) => link.getAttribute('href').replace('#', '');

let section = document.querySelectorAll('.section');
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-list__item-link').forEach(link => {
        link.classList.toggle(
          'nav-list__item-link--active',
          getId(link) === entry.target.id
        );
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
    e.preventDefault();

    const id = e.target.getAttribute('href').replace('#', '');

    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth',
    });
  }
});

