gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: true // Easaly remove markers for production 
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: "#zoom-bg", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true // Pin the element true or false
  } });


timelineHeader.
to(".image-1", {
  scale: 1.5 },
"sameTime").

to(".zoom-bg-container", {
  transform: 'translateX(60vw)', scale: 0.4, width: 700, height: 700, rotate: 2},
  "sameTime");