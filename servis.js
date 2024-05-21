// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-button');
  const contentItems = document.querySelectorAll('.content-item');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');

          // Uklanjanje active klase sa svih dugmadi
          buttons.forEach(btn => btn.classList.remove('active'));
          // Dodavanje active klase trenutnom dugmetu
          button.classList.add('active');

          // Uklanjanje active klase sa svih sadržaja
          contentItems.forEach(item => {
              item.classList.remove('active');
          });

          // Dodavanje active klase trenutnom sadržaju
          const activeContent = document.getElementById(category);
          activeContent.classList.add('active');
      });
  });
});
