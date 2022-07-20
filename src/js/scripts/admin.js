// POST
fetch("http://localhost:3000/requests")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adminContent = document.querySelector(".accordion");
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].place === undefined ||
        data[i].textarea === undefined ||
        data[i].help === undefined
      ) {
        data[i].place = ''
        data[i].textarea = ''
        data[i].help = ''
      }
      const appendAdminContent = document.createElement("div");
      appendAdminContent.classList.add("accordion__item");
      appendAdminContent.innerHTML = `
      <div class="accordion__item-trigger">
      <div class="trigger__num">${data[i].id}.</div>
      <div class="trigger__text">${data[i].date}</div>
      <div class="trigger__img">
        <span class="line1"></span>
        <span class="line2"></span>
      </div>
      </div>
      <div class="accordion__item-content">
        <div class="content__text">
          <div class="content__text-info name"><span>Name: </span><span>${data[i].firstName}</span></div>
          <div class="content__text-info phone"><span>Phone: </span><a href="tel:+${data[i].phone}">${data[i].phone}</a><span></span></div>
          <div class="content__text-info help"><span>Who needs help: </span><span>${data[i].help}</span></div>
          <div class="content__text-info place"><span>Place: </span><span>${data[i].place}</span></div>
          <div class="content__text-info detail"><span>Detail: </span><span>${data[i].textarea}</span></div>
          <button class="delete">Delete</button>
        </div>
      </div>`;
      adminContent.append(appendAdminContent);
    }
    accordion();
  });

// Accordion
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () =>
      item.parentNode.classList.contains("accordion__item-active")
        ? item.parentNode.classList.remove("accordion__item-active")
        : item.parentNode.classList.add("accordion__item-active")
    );
  });
}
