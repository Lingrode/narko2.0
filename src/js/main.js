const vis = document.querySelectorAll(".header-nav__list-item");
const drop = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < vis.length; i++) {
  vis[i].addEventListener("mouseover", () => {
    drop[i].classList.add("visible");
  });
  vis[i].addEventListener("mouseout", () => {
    drop[i].classList.remove("visible");
  });
}