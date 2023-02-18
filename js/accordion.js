const item = document.querySelectorAll(".accordion-item");
const heading = document.querySelectorAll(".accordion-header");
const itemLength = item.length;

for (let i = 0; i < itemLength; i++) {
  heading[i].addEventListener("click", function () {
    const inner = this.nextElementSibling;
    for (let j = 0; j < itemLength; j++) {
      if (i == j) {
        continue;
      }
      heading[j].parentNode.classList.remove("active");
      heading[j].nextElementSibling.style.maxHeight = null;
    }
    if (inner.style.maxHeight) {
      inner.style.maxHeight = null;
      this.parentNode.classList.remove("active");
    } else {
      this.parentNode.classList.add("active");
      inner.style.maxHeight = inner.scrollHeight + "px";
    }
  });
}
