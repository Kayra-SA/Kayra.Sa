let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navItems = document.querySelectorAll('.nav-item');
const counter = document.getElementById('slide-counter');
const totalSlides = slides.length;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  navItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentSlide);
  });

  const formattedCurrent = String(currentSlide + 1).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');
  counter.textContent = `${formattedCurrent} / ${formattedTotal}`;
}

function goToSlide(index) {
  if (index >= 0 && index < totalSlides) {
    currentSlide = index;
    updateSlides();
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlides();
}

/* Keyboard Navigation */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    nextSlide();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    prevSlide();
  }
});

/* Wheel Scroll Navigation */
let isScrolling = false;
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;
  if (e.deltaY > 0) {
    nextSlide();
  } else if (e.deltaY < 0) {
    prevSlide();
  }
  setTimeout(() => { isScrolling = false; }, 800);
});
