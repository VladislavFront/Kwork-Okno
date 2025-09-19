const objectSwiper = new Swiper(".object-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  autoplay: { 
    delay: 3000, 
    disableOnInteraction: false 
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper(".revies-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  autoplay: { 
    delay: 3000, 
    disableOnInteraction: false 
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const portfolioSwiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  autoplay: { 
    delay: 3000, 
    disableOnInteraction: false 
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});