gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin)

gsap.fromTo('.about-hero__title', { opacity: 0, y: 100 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: .2 ,
})
gsap.fromTo('.about-hero__paragraph', { opacity: 0, y: 100 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1,
})
gsap.fromTo('.about-hero__image', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1.2,
})

gsap.fromTo('.about-advantages__card', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-advantages',
    start: 'top center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.about-info__content', { opacity: 0, x: -200 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-info',
    start: 'top center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.about-start', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.about-start',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.about-start__image', { opacity: 0, x: -200 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  delay: .2,
  scrollTrigger: {
    trigger: '.about-start',
    start: 'top center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

