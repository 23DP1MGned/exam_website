const heroText = document.querySelector('.hero-text');
const heroBlocks = document.querySelector('.hero-blocks');
const blockBar = document.querySelector('.block-bar');
const blockContent = document.querySelector('.block-content');

const baseOffsetX = 20;

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (x - centerX) / centerX;
  const offsetY = (y - centerY) / centerY;

  const maxTranslate = 7;
  const maxTranslateVertical = 5    ;

  heroText.style.transform = `translate(${offsetX * maxTranslate}px, ${offsetY * maxTranslate}px)`;
  heroBlocks.style.transform = `translateX(${baseOffsetX}%) translate(${offsetX * maxTranslate * -1}px, ${offsetY * maxTranslate * -1}px)`;

  blockBar.style.transform = `translateY(${offsetY * maxTranslateVertical}px)`;
  blockContent.style.transform = `translateY(${offsetY * maxTranslateVertical}px)`;
});

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
  const heroText = document.querySelector('.hero-text');
  const heroBlocks = document.querySelector('.hero-blocks');

  setTimeout(() => {
    heroText.classList.add('animate-in');
    heroBlocks.classList.add('animate-in');
  }, 50);
});
