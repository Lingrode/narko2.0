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

const swiperCertificates = new Swiper(".certificates__inner", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    576: {
      slidesPerView: 2,
      // spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: false,
      // spaceBetween: 24,
    },
    1450: {
      slidesPerView: 4,
      // spaceBetween: 24,
    },
  },
});

const swiperStaff = new Swiper(".staff-swiper", {
  navigation: {
    nextEl: ".swiper-button-next-staff",
    prevEl: ".swiper-button-prev-staff",
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  allowTouchMove: false,
  breakpoints: {
    720: {
      slidesPerView: 4,
      speed: 0,
    },
  },
});

// Staff
function staff() {
  const nextSraff = document.querySelectorAll(".staff .swiper-button-next");
  for (let i = 0; i < nextSraff.length; i++) {
    function updateStaff720() {
      if (window.innerWidth < 721) {
        nextSraff[0].parentNode.style.display = "none";
        nextSraff[1].parentNode.style.display = "block";
      } else {
        nextSraff[0].parentNode.style.display = "block";
        nextSraff[1].parentNode.style.display = "none";
      }
    }
    updateStaff720();
  }
  window.addEventListener("resize", updateStaff720);
}
staff();

// textInfo
function textInfo() {
  const text = document.querySelectorAll(".textInfo__info-text");
  const btnOpen = document.querySelector(".textInfo__btn-open");
  const btnClose = document.querySelector(".textInfo__btn-close");
  let parentHeight = 0;
  for (let i = 0; i < text.length; i++) {
    text[0].classList.add("textInfo__info-text-open");
    text[i].setAttribute("text-id", i);

    parentHeight = parentHeight + text[i].clientHeight;
    window.addEventListener("resize", () => {
      parentHeight = 0;
      for (let i = 0; i < text.length; i++) {
        parentHeight = parentHeight + text[i].clientHeight;
      }
      if (text[i + 1].classList.contains("textInfo__info-text-open")) {
        open();
      } else {
        close();
      }
      console.log(parentHeight);
    });
    function open() {
      btnOpen.style.display = "none";
      btnClose.style.display = "block";
      for (let i = 0; i < text.length; i++) {
        if (text[i].getAttribute("text-id") > 0) {
          text[i].classList.add("textInfo__info-text-open");
          text[i].parentNode.classList.remove("textInfo__info-gradient");
          text[i].parentNode.style.height = parentHeight + "px";
        }
      }
    }
    function close() {
      btnOpen.style.display = "block";
      btnClose.style.display = "none";
      for (let i = 0; i < text.length; i++) {
        if (text[i].getAttribute("text-id") > 0) {
          text[i].classList.remove("textInfo__info-text-open");
          text[i].parentNode.classList.add("textInfo__info-gradient");
          text[i].parentNode.style.height = text[0].clientHeight + "px";
        }
      }
    }
    close();
  }
  btnOpen.addEventListener("click", open);
  btnClose.addEventListener("click", close);
}
textInfo();
