// Menu open/close
let menu = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar'); // Uncomment if you need this

menu.onclick = () => {
    menu.classList.toggle("move");
};
//Swiper
var swiper = new Swiper(".services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });