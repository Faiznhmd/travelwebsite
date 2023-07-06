const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav__menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// add blur header
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.add("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// scroll animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 200,
  // reset: true,
});

sr.reveal(
  ".home__data, .explore__user, .footer__container, .explore__data, .section__title",
  {}
);

sr.reveal(".home_card", {
  delay: 400,
  distance: "100px",
  interval: 100,
});

sr.reveal(".about__data, .join__image", {
  origin: "right",
});

sr.reveal(".about__image, .join__data", {
  origin: "left",
});

sr.reveal(".popular__card", {
  interval: 200,
});
