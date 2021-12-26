const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  

// COUNTRY SELECT

let btn = document.querySelector('.down');
let dropdown = document.querySelector('.dropdown');

btn.addEventListener('click', function(){
    dropdown.classList.toggle('show');
});