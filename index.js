gsap.registerPlugin(ScrollTrigger);

//Starting animations

gsap.from('.navbar', {opacity:0,duration:1});
gsap.from('#top', {opacity:0,duration:1});
gsap.from('.title-content', {opacity:0,duration:1,y:-50});
gsap.from('.menu-cont', {duration:1,y:50});

//scrolling animations
gsap.from(".section-title, .name",{
  scrollTrigger:
  {
    trigger: "#menu",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  duration:2
});

gsap.from(".meat", {
  scrollTrigger:
  {
    trigger: ".meat",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  x:-100,
  duration:1
});

gsap.from(".veg", {
  scrollTrigger:
  {
    trigger: ".veg",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  x:100,
  duration:1
});

gsap.from(".bg2", {
  scrollTrigger:
  {
    trigger: ".bg2",
    start:"#testemonials",
    scrub: true
  },
  y:-674,
  duration:1
});

gsap.from(".title2, .testemonial-body",{
  scrollTrigger:
  {
    trigger: "#testemonials",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  duration:2
});

gsap.from(".decor", {
  scrollTrigger:
  {
    trigger: ".decor",
    start:"#footer",
    scrub: true
  },
  y:-938,
  duration:1
});

gsap.from(".footer-box",{
  scrollTrigger:
  {
    trigger: "#footer",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  duration:2
});


// Image hovering

$(".meat").on("mouseover",function () {
  gsap.to('.meat', {duration:0.5,scale:1.1});
});
$(".meat").on("mouseout",function () {
  gsap.to('.meat', {duration:0.5,scale:1});
});

$(".veg").on("mouseover",function () {
  gsap.to('.veg', {duration:0.5,scale:1.1});
});
$(".veg").on("mouseout",function () {
  gsap.to('.veg', {duration:0.5,scale:1});
});
