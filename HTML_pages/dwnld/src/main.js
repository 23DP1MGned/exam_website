window.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h1");
    const downloadButton = document.querySelector(".download-button");
  
    setTimeout(() => {
      heroText.classList.add("animate-in");
      downloadButton.classList.add("animate-in");
    }, 200);
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