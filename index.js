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
  var socialBar = document.querySelector(".social-content");

  if (window.pageYOffset > 100) {
    navbar.classList.add("fixed");
    navbar.style.visibility = "visible";
    socialBar.classList.add("fixed");
    /* socialBar.style.visibility = "visible"; */
  } else {
    navbar.classList.remove("fixed");
    navbar.style.visibility = "hidden";
    /* socialBar.classList.remove("fixed");
    socialBar.style.visibility = "hidden"; */
  }
});
 


//Swiper JS
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});