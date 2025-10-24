let slides = document.querySelectorAll('.slide');
let current = 0;
let autoSlide = true;
let intervalTime = 3000; // 3 seconds
let slideInterval;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const nextSlide = () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
};

const prevSlide = () => {
  slides[current].classList.remove('active');
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add('active');
};

next.addEventListener('click', () => {
  nextSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', () => {
  prevSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (autoSlide) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
