gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: true // Easily remove markers for production 
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "img-scroll-zoom", // Custom label to the marker
    trigger: "#section2a", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "bottom bottom", // Start at top of Trigger and at the top of the viewport
    endTrigger: '#section3',
    end: "bottom bottom", // The element is 500px hight and end 50px from the top of the viewport
    pin: false // Pin the element true or false
  } });

timelineHeader.
to(".img-scroll__image", {
  transform: 'translate(60vw, 120vh)', scale: 0.4, width: 700, height: 700, rotate: 2},
  "sameTime");

const timelineHeader2 = gsap.timeline({
  scrollTrigger: {
    id: "img-scroll-sticky", // Custom label to the marker
    trigger: "#section2", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    endTrigger: '#section2a',
    end: "bottom bottom", // The element is 500px hight and end 50px from the top of the viewport
    pin: '.img-scroll__container' // Pin the element true or false
  } });

timelineHeader2.
to(".img-scroll__container", 1,
  "sameTime");