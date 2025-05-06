const menuButton = document.getElementById('menuButton');
const menuNav = document.getElementById('menuNav');

menuButton.addEventListener('click', function() {
  if (menuNav.classList.contains('menu-hidden')) {
    menuNav.classList.remove('menu-hidden');
  } else {
    menuNav.classList.add('menu-hidden'); 
  }
});

const steps = document.querySelectorAll('.step');
const contents = document.querySelectorAll('.step-content');

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    contents.forEach(content => content.classList.remove('active'));
    const target = contents[index];
    target.classList.add('active');
  });
});
