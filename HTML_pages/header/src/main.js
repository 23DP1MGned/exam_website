const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');
const mockupBar = document.querySelector('.mockup-bar');
const mockupContent = document.querySelector('.mockup-content');

const baseOffsetX = 20;

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (x - centerX) / centerX;
  const offsetY = (y - centerY) / centerY;

  const maxTranslate = 7;
  const maxTranslateVertical = 5    ;

  heroContent.style.transform = `translate(${offsetX * maxTranslate}px, ${offsetY * maxTranslate}px)`;
  heroImage.style.transform = `translateX(${baseOffsetX}%) translate(${offsetX * maxTranslate * -1}px, ${offsetY * maxTranslate * -1}px)`;

  mockupBar.style.transform = `translateY(${offsetY * maxTranslateVertical}px)`;
  mockupContent.style.transform = `translateY(${offsetY * maxTranslateVertical}px)`;
});
