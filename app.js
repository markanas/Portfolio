const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");
const header = document.querySelector("header");
const fade = document.querySelectorAll(".fade-in");
const slide = document.querySelectorAll(".slide-in");
const hoverLinks = document.querySelectorAll(".hover-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      burger.classList.remove("active");
    });
  });
});

// OnScroll event handler
const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", onScroll);

// console.log(hoverLinks[1]);

// hoverLinks[0].style.background = 'url("./images/Weather.png")';
// Slide and appear animation handler
// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -100px 0px",
// };

// const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// }, appearOptions);

// fade.forEach((fades) => {
//   appearOnScroll.observe(fades);
// });

// slide.forEach((slides) => {
//   appearOnScroll.observe(slides);
// });
