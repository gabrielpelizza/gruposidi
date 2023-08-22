const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__menu-link");
const navToggleIcon = document.querySelector(".nav-toggle i");

const navbar = document.querySelector('.navbar');



navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu_visible");
  navToggleIcon.classList.toggle("fa-bars");
  navToggleIcon.classList.toggle("fa-times");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu_visible");
    navToggleIcon.classList.remove("fa-times");
    navToggleIcon.classList.add("fa-bars");
  });
});

window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 100) {
    navbar.classList.add("fixed");
    navbar.style.visibility = "visible";
  } else {
    navbar.classList.remove("fixed");
    navbar.style.visibility = "hidden";
  }
});



