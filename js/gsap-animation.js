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

// Circles animation

// gsap.to('.hero-circle-a', {
//   right: 390,
//   top: 190,
//   duration: 5,
//   scrollTrigger: {
//     scrub: true,
//   }
// })
// gsap.to('.hero-circle-b', {
//   right: 170,
//   top: 200,
//   duration: 5,
//   scrollTrigger: {
//     scrub: true,
//   }
// })
// gsap.to('.hero-circle-c', {
//   top: -20,
//   duration: 5,
//   scrollTrigger: {
//     scrub: true,
//   }
// })

// ? Advantages animation

gsap.fromTo('.black-section__image', { opacity: 0, y: 100 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.black-section',
    end: 'top',
    scrub: false,
  }
})

gsap.fromTo('.info__image', { opacity: 0, x: -100 }, {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.info-blocks',
    start: 'top center',
    end: 'bottom center',
    markers: false,
  }
})