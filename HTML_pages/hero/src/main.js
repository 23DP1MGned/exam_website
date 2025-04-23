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
  