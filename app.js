let navbar = document.getElementById("navdiv");
let navbarLinks = document.querySelectorAll("#navdiv a");

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
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
    "Full Stack Developer",
  ],
  typeSpeed: 130,
  backSpeed: 200,
  loop: true,
});
