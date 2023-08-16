let tl = gsap.timeline()

tl.fromTo('.catalog-hero-content', { y: 50, opacity: 0 }, {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1,
})

gsap.fromTo('.gsap-sec-1', 1, {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  opacity: 1,
  delay: 1,
  ease: Back.easeOut.config(1.7)
})
gsap.fromTo('.gsap-sec-2', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: 1.4,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
})
gsap.fromTo('.gsap-sec-3', {scale: 0, opacity: 0}, {
  scale: 1,
  duration: 1,
  delay: 1.8,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
})