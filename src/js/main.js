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

const vis = document.querySelectorAll(".header-nav__list-link");
const drop = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < vis.length; i++) {
  vis[i].addEventListener("mouseover", () => {
    drop[i].classList.add("visible");
  });
  vis[i].addEventListener("mouseout", () => {
    drop[i].classList.remove("visible");
  });
}
