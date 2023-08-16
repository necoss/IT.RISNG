const swiper = new Swiper('.catalog-lang-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 3000,
  grabCursor: true,

  autoplay: {
    delay: 0,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

swiper.el.addEventListener('mouseover', function () {
  swiper.autoplay.stop()
})
swiper.el.addEventListener('mouseleave', function () {
  swiper.autoplay.start()
}) 