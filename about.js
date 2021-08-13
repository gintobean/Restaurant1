gsap.registerPlugin(ScrollTrigger);
gsap.from('.navbar', {opacity:0,duration:1.5});

//media queries
if ($(window).width() < 700) {
    $('.navbar-brand, .nav-item').addClass('mx-auto');
}
else {
    $('.navbar-brand, .nav-item').removeClass('mx-auto');
}

//PARALLAX

gsap.from(".restaurant-wrapper", {ease: "none", scrollTrigger: {
  trigger: ".content",
  start: "top bottom",
  scrub: true,
  end: "top top"
},
y:"-42.5vh"
});

gsap.from(".mission-wrapper", {ease: "none", scrollTrigger: {
  trigger: ".content",
  start: "bottom bottom",
  scrub: true,
  endTrigger: ".mission",
  end: "top top"
},
y:"-50vh"
});

//Text fading
gsap.from(".restaurant-wrapper",{
  ease:"none",
  opacity: 0,
  duration:1.5
});

gsap.from("#footer",{
  scrollTrigger:
  {
    trigger: ".mission",
    toggleActions: "restart pause resume reverse",
    start: "bottom bottom"
  },
  opacity:0,
  duration:2
});

gsap.from(".section-heading, .about-text",{
  scrollTrigger:
  {
    trigger: ".text",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  duration:2
});

gsap.from(".section-heading2, .about-text2",{
  scrollTrigger:
  {
    trigger: ".mission",
    toggleActions: "restart pause resume pause"
  },
  opacity:0,
  duration:2
});
