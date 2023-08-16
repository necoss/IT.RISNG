gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin)

let tl = gsap.timeline()

tl.fromTo('.hero-section', { y: 50, opacity: 0 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1,
})

gsap.fromTo('.hero-circle-a', 1, {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  opacity: 1,
  delay: 1,
  ease: Back.easeOut.config(1.7)
})
gsap.fromTo('.hero-circle-b', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: 1.4,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
})
gsap.fromTo('.hero-circle-c', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: 1.8,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
})

// ? Advantages Animation

gsap.fromTo('.advantages-item', { opacity: 0, y: 200 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.advantages',
    start: 'top 250 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

// ? Black section animation

gsap.fromTo('.black-section__image', { opacity: 0, y: 100 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.black-section',
    start: 'top 300 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.info__image', { opacity: 0, x: -100 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.info-blocks',
    start: 'top 300 center',
    end: 'bottom center',
    markers: false,
  }
})

// ? Get knowledge 

gsap.fromTo('.knowledge-circle-a', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  opacity: 1,
  ease: Back.easeOut.config(1.7),

  scrollTrigger: {
    trigger: '.get-knowledge',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
  }
})
gsap.fromTo('.knowledge-circle-b', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: .4,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
  scrollTrigger: {
    trigger: '.get-knowledge',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
  }
})
gsap.fromTo('.knowledge-circle-c', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: .6,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
  scrollTrigger: {
    trigger: '.get-knowledge',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
  }
})

// ? Reviews Animation

gsap.fromTo('.reviews__title', { opacity: 0, x: -100 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.reviews',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})

gsap.fromTo('.reviews-card__block', { opacity: 0, x: -100 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  delay: .4,
  scrollTrigger: {
    trigger: '.reviews',
    start: 'top 500 center',
    end: 'bottom center',
    markers: false,
    scrub: false,
  }
})