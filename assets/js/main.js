// Menu Mobile Start

function changeClass() {
  document.getElementById("mobileOpened").classList.toggle("dNone");
}

window.onload = function () {
  document
    .getElementById("mobileButton")
    .addEventListener("click", changeClass);
  document
    .getElementById("mobileOpenedButton")
    .addEventListener("click", changeClass);
  document
    .getElementById("opened__link--1")
    .addEventListener("click", changeClass);
  document
    .getElementById("opened__link--2")
    .addEventListener("click", changeClass);
  document
    .getElementById("opened__link--3")
    .addEventListener("click", changeClass);
  document
    .getElementById("opened__link--4")
    .addEventListener("click", changeClass);
  document
    .getElementById("opened__link--5")
    .addEventListener("click", changeClass);
};

// Menu Mobile End

// Smooth Scroll Start

const menuItems = document.querySelectorAll(
  '.header__nav--wrapper a[href^="#"]'
);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// Smooth Scroll End

// Scroll Reveal Start

ScrollReveal({ distance: "80px" });
ScrollReveal().reveal("#first__section", { delay: 300, origin: "top" });
ScrollReveal().reveal(".first__section--wrapper", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal("#second__section", { delay: 300, origin: "left" });
ScrollReveal().reveal(".second__section--wrapper", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal("#third__section", { delay: 300, origin: "right" });
ScrollReveal().reveal(".third__section--wrapper", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal("#fourth__section", { delay: 300, origin: "left" });
ScrollReveal().reveal(".fourth__section--wrapper", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal("#fifth__section", { delay: 300, origin: "right" });
ScrollReveal().reveal(".fifth__section--wrapper", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal("#sixth__section", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".sixth__section--wrapper", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal("#sixth__section", { delay: 300, origin: "left" });
ScrollReveal().reveal(".seventh_section--wrapper", {
  delay: 500,
  origin: "right",
});

// Scroll Reveal End

// Cookie Start

function fecharCookieSurpresa() {
  document.getElementById("cookieSurpresa").style.display = "none";
  window.localStorage.setItem("maiorCookie", "sim");
}
if (!window.localStorage.getItem("maiorCookie")) {
  document.getElementById("cookieSurpresa").style.display = "flex";
}

// Cookie End
