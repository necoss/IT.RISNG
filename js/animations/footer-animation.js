gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin)


gsap.fromTo('.footer-main-section', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 600 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.footer-quick-access', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: .2,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 600 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.footer-socials', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: .4,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 600 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.footer-support', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: .6,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 600 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})