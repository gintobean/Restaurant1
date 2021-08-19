gsap.registerPlugin(ScrollTrigger);

//Starting animations

gsap.from('.bg', {
  opacity: 0,
  duration: 1
});
gsap.from('.title-content', {
  opacity: 0,
  duration: 1,
  y: -50
});

gsap.from(".bg-wrapper", {
  ease: "none",
  scrollTrigger: {
    trigger: "#top",
    start: "top top",
    endTrigger: "#hours",
    end: "top top",
    scrub: true
  },
  y: "-200vh"
});

//scrolling animations

gsap.from("#menu-title, .name", {
  scrollTrigger: {
    trigger: "#menu",
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  // y:50,
  duration: 2
});

gsap.from(".hours-container", {
  scrollTrigger: {
    trigger: "#hours",
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  duration: 2
});

gsap.from(".gallery-pic-row, .title4", {
  scrollTrigger: {
    trigger: "#gallery",
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  duration: 2
});

if ($(window).width() > 767) {
  gsap.from(".meat", {
    scrollTrigger: {
      trigger: ".meat",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: -50,
    duration: 1
  });
} else {
  gsap.from(".meat", {
    scrollTrigger: {
      trigger: ".meat",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    duration: 2
  });
}

if ($(window).width() > 767) {
  gsap.from(".veg", {
    scrollTrigger: {
      trigger: ".veg",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: 50,
    duration: 1
  });
}
else {
  gsap.from(".veg", {
    scrollTrigger: {
      trigger: ".veg",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    duration: 2
  });
}

if ($(window).width() > 767) {
  gsap.from(".restaurant-photo", {
    scrollTrigger: {
      trigger: ".restaurant-photo",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    x: 50,
    duration: 1
  });
}
else {
  gsap.from(".restaurant-photo", {
    scrollTrigger: {
      trigger: ".restaurant-photo",
      toggleActions: "restart pause resume pause"
    },
    opacity: 0,
    duration: 1
  });
}

gsap.from(".bg2-wrapper", {
  ease: "none",
  scrollTrigger: {
    trigger: "#menu",
    start: "bottom bottom",
    endTrigger: "#hours",
    end: "top top",
    scrub: true
  },
  y: "-50vh"
});

gsap.from(".bg3-wrapper", {
  ease: "none",
  scrollTrigger: {
    trigger: "#hours",
    start: "bottom bottom",
    endTrigger: "#testemonials",
    end: "top top",
    scrub: true
  },
  y: "-50vh"
});


gsap.from(".title2, .testemonial-body", {
  scrollTrigger: {
    trigger: "#testemonials",
    toggleActions: "restart pause resume pause"
  },
  opacity: 0,
  duration: 2
});

gsap.from(".decor-wrapper", {
  ease: "none",
  scrollTrigger: {

    trigger: "#testemonials",
    start: "bottom bottom",
    endTrigger: "#gallery",
    end: "top top",
    scrub: true,
  },
  y: "-50vh"
});

gsap.from(".bg5-wrapper", {
  ease: "none",
  scrollTrigger: {

    trigger: "#gallery",
    start: "bottom bottom",
    endTrigger: "#footer",
    end: "bottom bottom",
    scrub: true
  },
  y: "-50vh"
});

//Review Timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".yelp",
    toggleActions: "restart pause resume pause"
  }
});

if ($(window).width() > 767) {
tl.from(".review1", {
    opacity: 0,
    x: -50,
    duration: 1
  }, "-=0.5")
  .from(".review2", {
    opacity: 0,
    x: 50,
    duration: 1
  }, "-=0.5")
  .from(".review3", {
    opacity: 0,
    x: -50,
    duration: 1
  }, "-=0.5");
}
else {
  tl.from(".review1", {
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".review2", {
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".review3", {
      opacity: 0,
      duration: 1
    }, "-=0.5");
}

// Image hovering

$(".yelp-review").on("mouseover", function() {
  gsap.set(this, {
    zIndex: 100
  });
  gsap.to(this, {
    duration: 0.5,
    scale: 1.4,
  });
});
$(".yelp-review").on("mouseout", function() {
  gsap.set(this, {
    zIndex: 0
  });
  gsap.to('.yelp-review', {
    duration: 0.5,
    scale: 1
  });
});

$(".meat").on("mouseover", function() {
  gsap.to('.meat', {
    duration: 0.5,
    scale: 1.1
  });
});
$(".meat").on("mouseout", function() {
  gsap.to('.meat', {
    duration: 0.5,
    scale: 1
  });
});

$(".veg").on("mouseover", function() {
  gsap.to('.veg', {
    duration: 0.5,
    scale: 1.1
  });
});
$(".veg").on("mouseout", function() {
  gsap.to('.veg', {
    duration: 0.5,
    scale: 1
  });
});

$(".top").on("mouseover", function() {
  gsap.to(this , {
    duration: 0.5,
    scale: 1.05
  });
  //$(this).addClass("caption");
});
$(".top").on("mouseout", function() {
  gsap.to(this , {
    duration: 0.5,
    scale: 1
  });
  //$(this).removeClass("caption");
});

$(".top").hover(
  function () {
    animateIt($(this).children(".bottom")).play();
  },
  function () {
    animateItReverse($(this).children(".bottom")).play();
  }
);

function animateIt(obj) {
  var tween = gsap.to(obj, {
    ease: "power1.in",
    duration: 1,
    y: "-12vh"
  });
  tween.reversed(!tween.reversed());
  return tween;
}

function animateItReverse(obj) {
  var tween = gsap.to(obj, {
    ease: "power1.out",
    duration: 2,
    y: "12vh"
  });
  return tween;
}
