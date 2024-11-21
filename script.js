let isScrolling;
const logo = document.querySelector(".logo img");
const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    if (scrollY > 50) {
      console.log("you are at the bottom");

      header.style.padding = "5px 0";
      logo.style.width = "80px";
      logo.style.transition = "0.5s";
    } else {
      header.style.padding = "var(--even-p-xs) 0 ";
      logo.style.width = "115px";
    }
  }, 100);
});
