const carousel_1 = document.querySelector(".carousel-1");
const carouselAllItems1 = document.querySelectorAll(".carousel-item-1");
const carouselItems1 = document.querySelector(".carousel-items-1");
const prevBtn1 = document.querySelector(".carousel-prev-1");
const nextBtn1 = document.querySelector(".carousel-next-1");

let slideLength1 = 1;

const carouselItems1Length = carouselAllItems1.length;

const carouselItemWidth1 = carousel_1.offsetWidth / slideLength1;
carouselItems1.style.width = carouselItems1Length * carouselItemWidth1 + "px";

for (let i = 0; i < carouselItems1Length; i++) {
  carouselAllItems1[i].style.width = carouselItemWidth1 + "px";
}

const stepLength1 = 1;
const stepWidth1 = stepLength1 * carouselItemWidth1;

let currentPosition1 = 0;
let lastPosition1 = (carouselItems1Length - slideLength1) * carouselItemWidth1;

prevBtn1.addEventListener("click", function () {
  currentPosition1 -= stepWidth1;
  if (Math.ceil(currentPosition1) < 0) {
    currentPosition1 = lastPosition1;
  }
  carouselItems1.style.transform = `translateX(${-currentPosition1}px)`;
});

nextBtn1.addEventListener("click", function () {
  currentPosition1 += stepWidth1;
  console.log(currentPosition1);
  if (Math.floor(currentPosition1) > lastPosition1) {
    currentPosition1 = 0;
  }
  carouselItems1.style.transform = `translateX(${-currentPosition1}px)`;
});
