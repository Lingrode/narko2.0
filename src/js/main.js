// Custom scripts

// $(function () {
//   $(".header-nav__list-item").hover(
//     function () {
//       $(this).children("div").addClass("visible");
//     },
//     function () {
//       $(this).children("div").removeClass("visible");
//     }
//   );
//   let menuItem = $(".header-nav__list-item");
//   menuItem.hover(
//     function () {
//       $(this).addClass("hovered");
//     },
//     function () {
//       $(this).removeClass("hovered");
//     }
//   );
// });

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
