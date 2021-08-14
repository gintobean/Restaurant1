gsap.registerPlugin(ScrollTrigger);
gsap.from('.meat-items, .veg-items', {opacity:0,duration:1});

//animations

let tl = gsap.timeline({scrollTrigger: {
  trigger: "#meat-menu",
  toggleActions: "restart pause resume restart"
}})

for (var i = 1; i <=4; i++) {
  tl.from(".pic" + i, {opacity:0, duration:3}, "-=2.5");
}

let tl2 = gsap.timeline({scrollTrigger: {
  trigger: "#veg-menu",
  toggleActions: "restart pause resume restart"
}})

for (var i = 5; i <=8; i++) {
  tl2.from(".pic" + i, {opacity:0, duration:3}, "-=2.5");
}
