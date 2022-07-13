// Header menu
function headerMenu() {
  const hover = document.querySelectorAll(".header-nav__list-item");
  const dropdown = document.querySelectorAll(".dropdown-menu");

  for (let i = 0; i < 4; i++) {
    hover[i].addEventListener("mouseover", () => {
      dropdown[i].classList.add("visible");
    });
    hover[i].addEventListener("mouseout", () => {
      dropdown[i].classList.remove("visible");
    });
  }
  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", () => {
      hover[i].classList.add("hovered");
    });
    hover[i].addEventListener("mouseout", () => {
      hover[i].classList.remove("hovered");
    });
  }
}
headerMenu();

// Burger menu
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const burgerGlass = document.querySelector(".header-menu__burger-wrapper svg");
  const menu = document.querySelector(".header-menu");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      burgerGlass.style.display = "block";
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      burgerGlass.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      burgerGlass.style.display = "none";
    }
  });
}
burgerMenu();

// Accordion
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.parentNode.classList.contains("accordion__item-active")) {
        parent.parentNode.classList.remove("accordion__item-active");
      } else {
        parent.parentNode.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

// Swiper
const swiperTop = new Swiper(".top.swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,
  loop: true,
  autoplay: {
    enabled: true,
    delay: 5000,
  },
});

const swiperStaff = new Swiper(".staff-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 0,
  slidesPerView: 4,
  // allowTouchMove: false,
  // simulateTouch: false,
});