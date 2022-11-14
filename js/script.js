const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const porgress = document.querySelector(".progress-bar-wrapper");
const progressBarPercents = [90, 76, 40, 80, 60, 32];

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLinks) => {
        navbarLinks.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
  if (window.pageYOffset + window.innerHeight >= porgress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
});
