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

document.addEventListener("DOMContentLoaded", () => {
  let currentCommentIndex = 0;
  const comments = document.querySelectorAll(".comment");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function showComment(index) {
    comments.forEach((comment, i) => {
      comment.classList.remove("active");
      if (i === index) {
        comment.classList.add("active");
      }
    });
  }

  showComment(currentCommentIndex);

  nextBtn.addEventListener("click", () => {
    if (currentCommentIndex < comments.length - 1) {
      currentCommentIndex++;
    } else {
      currentCommentIndex = 0;
    }
    showComment(currentCommentIndex);
  });

  prevBtn.addEventListener("click", () => {
    if (currentCommentIndex > 0) {
      currentCommentIndex--;
    } else {
      currentCommentIndex = comments.length - 1;
    }
    showComment(currentCommentIndex);
  });
});
