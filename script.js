const slides = document.querySelector(".slides");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  updateSlider();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateSlider();
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function toggleMobileMenu() {
  navLinks.classList.toggle("active");
}

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

mobileMenu.addEventListener("click", toggleMobileMenu);
