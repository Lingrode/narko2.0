const swiper = new Swiper('.swiper', {
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
//   // Responsive breakpoints
//   breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 3,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
// }
});

function headerMenu() {
  const hover = document.querySelectorAll(".header-nav__list-item");
  const dropdown = document.querySelectorAll(".dropdown-menu");
  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", () => {
      dropdown[i].classList.add("visible");
    });
    hover[i].addEventListener("mouseout", () => {
      dropdown[i].classList.remove("visible");
    });
  }
}
headerMenu();