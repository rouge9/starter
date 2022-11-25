let navbar = document.getElementById("navdiv");
let navbarLinks = document.querySelectorAll("#navdiv a");

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link);
    if (
      scrollPos + 150 > section.offsetTop &&
      scrollPos + 150 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((element) => {
  observer.observe(element);
});

const typedtext = document.getElementsByClassName("typedtext")[0];
var typed = new Typed(typedtext, {
  strings: [
    "Full Stack Developer",
    "Full Stack Developer",
    "ui/ux Designer",
    "Freelancer",
    "Data Scientist",
    "Automation Engineer",
    "Full Stack Developer",
  ],
  typeSpeed: 130,
  backSpeed: 100,
  loop: true,
});

const toggle = document.querySelector("#toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const closeBtn = document.querySelector(".close");
const navLinks = document.querySelectorAll(".mobile-menu .nav-link");
toggle.onclick = function () {
  mobileMenu.style.setProperty("width", "50%");
};
closeBtn.onclick = function () {
  mobileMenu.style.setProperty("width", "0%");
};

navLinks.forEach((navLink) => {
  navLink.onclick = function () {
    mobileMenu.style.setProperty("width", "0%");
  };
});
const scrollUpBtn = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    scrollUpBtn.style.setProperty("display", "block");
  } else {
    scrollUpBtn.style.setProperty("display", "none");
  }
});
