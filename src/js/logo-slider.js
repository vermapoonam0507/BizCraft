

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  speed: 4000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
});