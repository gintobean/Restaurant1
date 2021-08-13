gsap.registerPlugin(ScrollTrigger);

//media queries
if ($(window).width() < 700) {
    $('.navbar-brand').addClass('mx-auto');
}
else {
    $('.navbar-brand').removeClass('mx-auto');
}

//Starting animations

gsap.from('.navbar', {opacity:0,duration:1});
gsap.from('.bg', {opacity:0,duration:1});
gsap.from('.title-content', {opacity:0,duration:1,y:-50});
gsap.from('.menu-cont', {duration:1,y:50});

//scrolling animations
gsap.to(".bg", {
  ease: "none",
  scrollTrigger: {
    trigger: ".bg2",
    start: "bottom bottom",
    toggleActions: "restart pause resume reverse"
  },
  visibility: 'hidden'
});

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

$(".bg2-wrapper").css('transform','translate(0,25vh)');
gsap.from(".bg2-wrapper", {ease:"none",
  scrollTrigger:
  {
    trigger: "#menu",
    start:"bottom bottom",
    endTrigger: "#testemonials",
    end: "top top",
    scrub: true
  },
  y:"-50vh"
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

$(".decor-wrapper").css('transform','translate(0,25vh)');
gsap.from(".decor-wrapper", {ease: "none",
  scrollTrigger:
  {

    trigger: "#testemonials",
    start:"bottom bottom",
    endTrigger:"#footer",
    end: "bottom bottom",
    scrub: true,
  },
  y:"-50vh"
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

//Review Timeline
let tl = gsap.timeline({scrollTrigger: {
  trigger: ".yelp",
  toggleActions: "restart pause resume pause"
}});
tl.from(".review1", {
  opacity:0,
  x:-100,
  duration:1
}, "-=0.5")
.from(".review2", {
  opacity:0,
  x:100,
  duration:1
}, "-=0.5")
.from(".review3", {
  opacity:0,
  x:-100,
  duration:1
}, "-=0.5");

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
