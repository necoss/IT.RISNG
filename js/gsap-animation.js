gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin)

// * Lenis

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,

})


lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

requestAnimationFrame(raf)

// // * ScrollSmoother

// // ScrollSmoother.create({
// //   wrapper: '.gsap-wrapper',
// //   content: '.gsap-content',
// //   smooth: 1.5,
// //   effects: true,
// // })

// // * Timelines

gsap.set(".reviews-wrapper", {backgroundImage: `backgroundColor: '#FBFAFA${innerWidth * 3}x${innerHeight})`})

gsap.to(".reviews-wrapper", {
  xPercent: -100, 
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".reviews-wrapper",
    start: "top top",
    end: () => innerWidth * 3,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
    onEnter: () => {
      gsap.to('.reviews-wrapper', { duration: 1.0, backgroundColor: '#FBFAFA'})
    },
    onLeaveBack: () => {
      gsap.to('.reviews-wrapper', { duration: 1.0, backgroundColor: '#FBFAFA'})
    },
  }
});

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