window.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h1");
    const downloadButton = document.querySelector(".download-button");
  
    setTimeout(() => {
      heroText.classList.add("animate-in");
      downloadButton.classList.add("animate-in");
    }, 200);
  });
  