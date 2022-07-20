window.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
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
        body.classList.add("locked");
        burgerGlass.style.display = "block";
      } else {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
        burgerGlass.style.display = "none";
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
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

  // Top Swiper
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

  // Certificates Swiper
  const swiperCertificates = new Swiper(".certificates__inner", {
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -80,
        centeredSlides: false,
      },
      860: {
        slidesPerView: 2,
        spaceBetween: -170,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  // Swiper Swiper
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

  // Reviews Swiper
  const swiperReviews = new Swiper(".reviews__inner", {
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -80,
        centeredSlides: false,
      },
      860: {
        slidesPerView: 2,
        spaceBetween: -170,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  // News Swiper
  const swiperNews = new Swiper(".news__inner", {
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -80,
        centeredSlides: false,
      },
      860: {
        slidesPerView: 2,
        spaceBetween: -170,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1450: {
        slidesPerView: 4,
        spaceBetween: 24,
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
        text[i].getAttribute("text-id") > 0 &&
        text[i].classList.contains("textInfo__info-text-open")
          ? (text[i].parentNode.style.height = parentHeight + "px")
          : (text[i].parentNode.style.height = text[0].clientHeight + "px");
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

  // Certificate
  function certificate() {
    const img = document.querySelectorAll(".certificates__inner-slide img");
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener("click", () => {
        body.classList.add("locked");
        const imgOpen = document.createElement("div");
        imgOpen.classList.add("img-open");
        imgOpen.innerHTML = `
          <div class="container">
            <img src="${img[i].src}" alt="certificate-id-${i}" />
            <svg
              class="close-img"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
            </svg>
          </div>`;
        document.body.append(imgOpen);
        const closeImg = document.querySelector(".close-img");
        closeImg.addEventListener("click", () => {
          body.classList.remove("locked");
          document.querySelector(".img-open").remove();
        });
      });
    }
  }
  certificate();

  // Price
  function price() {
    const request = document.querySelector(".request");
    const requestTarget = document.querySelectorAll(".prices__sign-up");
    requestTarget.forEach((item) => {
      item.addEventListener("click", () => {
        request.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    });
  }
  price();

  // Forms
  function forms() {
    const forms = document.querySelectorAll("form");
    const message = {
      loading: "img/spinner.svg",
    };
    let statusMessage = document.createElement("img");
    statusMessage.src = message.loading;
    forms.forEach((item) => bindPostData(item));
    const postData = async (url, data) => {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      return await res.json();
    };
    function bindPostData(form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formSent = form.querySelectorAll("#sent-label");
        statusMessage.classList.add("form__input-sent-loading");
        document
          .querySelectorAll("#date")
          .forEach((item) => item.setAttribute("value", moment().format("L LTS")));
        formSent.forEach((item) => {
          item.textContent = "";
          item.disabled = true;
          item.append(statusMessage);
        });

        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        postData("http://localhost:3000/requests", json)
          .then(() => {
            statusMessage.remove();
            form.reset();
            result("success");
            formSent.forEach((item) => {
              item.textContent = "Отправить";
              item.disabled = false;
            });
          })
          .catch(() => {
            statusMessage.remove();
            result("error");
            formSent.forEach((item) => {
              item.textContent = "Попробовать еще раз";
              item.disabled = false;
            });
          })
          .finally(() => {
            statusMessage.remove();
            formSent.forEach((item) => {
              item.disabled = false;
            });
          });
      });

      function result(status) {
        const statusParent = document.createElement("div");
        statusParent.classList.add(status, "massage-target");
        document.querySelectorAll(".massage-target").forEach((item) => item.remove());
        statusParent.innerHTML = `
          <svg
            class="close-img"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px">
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
          </svg>
          <p>${status}</p>`;
        document.body.append(statusParent);
        document
          .querySelectorAll(".close-img")
          .forEach((item) => item.addEventListener("click", () => statusParent.remove()));
        setTimeout(() => (statusParent.style.opacity = 0), 1500);
        setTimeout(() => statusParent.remove(), 4000);
      }
    }
  }
  forms();
});
