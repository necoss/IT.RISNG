gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin)


gsap.fromTo('.navigation__logo', { opacity: 0, y: -30 }, {
  opacity: 1,
  y: 0,
  duration: 1,
})

gsap.fromTo('.navigation__list-item', { opacity: 0, y: -30}, {
  opacity: 1,
  duration: 1,
  y: 0,
  stagger: 0.15,
})