window.addEventListener('load', () => {
    const textElements = document.querySelectorAll('.fade-in');
    textElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 150);
    });
  
    const imagesBlock = document.querySelector('.images');
    setTimeout(() => {
      imagesBlock.classList.add('animate-in');
    }, textElements.length * 90);
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

document.getElementById("downloadBtn").addEventListener("click", function () {
  window.location.href = "../dwnld/index.html";
});
