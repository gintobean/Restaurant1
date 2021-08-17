gsap.registerPlugin(ScrollTrigger);
//media queries
if ($(window).width() < 700) {
  $('.navbar-brand, .nav-item').addClass('mx-auto');
} else {
  $('.navbar-brand, .nav-item').removeClass('mx-auto');
}

//navbar animation

var position = 10000;
var navHeight = -1 * parseInt($(".navbar").css("height")) - 20;
console.log(parseInt($(window).height()))

$(window).on("scroll", function() {
  var curPosition = $(window).scrollTop();
  // if (curPosition >  parseInt($(window).height())) {
    console.log(position + "," + curPosition);
    if (position < curPosition && curPosition > 0) {
      gsap.to(".navbar", {
        y: navHeight,
        duration: 1.3
      });
    } else {
      gsap.to(".navbar", {
        y: 0,
        duration: 1
      });
    }
    position = curPosition;
  //}
});


//Footer fade

gsap.from(".footer-box", {
  scrollTrigger: {
    trigger: "#footer",
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  duration: 2
});
