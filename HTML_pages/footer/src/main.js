const menuButton = document.getElementById('menuButton');
const menuNav = document.getElementById('menuNav');

menuButton.addEventListener('click', function() {
  if (menuNav.classList.contains('menu-hidden')) {
    menuNav.classList.remove('menu-hidden');
  } else {
    menuNav.classList.add('menu-hidden'); 
  }
});

const el = document.querySelector('.contact-win');
el.classList.add('fade-in-up');

new IntersectionObserver(([e], obs) => {
  if (e.isIntersecting) {
    e.target.classList.add('show');
    obs.disconnect();
  }
}, { threshold: 0.1 }).observe(el);
