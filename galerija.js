// script.js
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-image');

  images.forEach(image => {
      image.addEventListener('click', () => {
          // Provjeri je li slika već proširena
          const isExpanded = image.classList.contains('expanded');

          // Ukloni 'expanded' klasu sa svih slika
          images.forEach(img => img.classList.remove('expanded'));

          // Ako slika nije bila proširena, proširi je
          if (!isExpanded) {
              image.classList.add('expanded');
          }
      });
  });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    const categoryButtons = document.querySelectorAll('.category-button');

    // Prikaži sve slike na početku
    showImages('all');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Ukloni 'active' klasu sa svih dugmadi
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Dodaj 'active' klasu na kliknuto dugme
            button.classList.add('active');

            showImages(category);
        });
    });

    function showImages(category) {
        images.forEach(image => {
            const imageCategory = image.getAttribute('data-category');
            if (category === 'all' || category === imageCategory) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
});
