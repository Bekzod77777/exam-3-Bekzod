const indicators = document.querySelector(".about__bottom-img");
const show = document.querySelector(".about__top-img img");

indicators.addEventListener("click", function (event) {
  event.target.src && (show.src = event.target.src);
});
