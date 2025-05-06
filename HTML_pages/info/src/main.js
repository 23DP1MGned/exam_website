const menuButton = document.getElementById('menuButton');
const menuNav = document.getElementById('menuNav');

menuButton.addEventListener('click', function() {
  if (menuNav.classList.contains('menu-hidden')) {
    menuNav.classList.remove('menu-hidden');
  } else {
    menuNav.classList.add('menu-hidden'); 
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
});
