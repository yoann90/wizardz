const animeSection1 = () => {
  let tl = gsap.timeline();

  tl.from("nav h1,nav a,nav button", {
    y: -30,
    delay: 1,
    duration: 0.8,
    opacity: 0,
    stagger: 0.15,
  });
  tl.from(
    ".center-part1 h1",
    {
      x: -300,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.3"
  );
  tl.from(".center-part1 p", {
    x: -100,
    duration: 0.4,
    opacity: 0,
  });
  tl.from(".center-part1 button", {
    duration: 0.4,
    opacity: 0,
  });
  tl.from(
    ".center-part2 img",
    {
      x: 200,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.7"
  );

  tl.from(".section1bottom img", {
    y: 30,
    delay: 1,
    duration: 0.6,
    opacity: 0,
    stagger: 0.15,
  });
};
animeSection1();

const animeSection2 = () => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "bottom 90%",
      scrub: 2,
    },
  });
  tl2.from(".services", {
    y: -30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line1.rigth",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".elem.line2.rigth",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
};

animeSection2();

let menu = document.querySelector(".burger-menu ");
let closeNav = document.querySelector("#full i ");

let to = gsap.timeline();
to.to("#full", {
  top: 0,
  duration: 0.5,
});
to.from("#full a,hr,#full > button", {
  x: -150,
  duration: 0.6,
  stagger: 0.3,
  opacity: 0,
});
to.from("#full i", {
  opacity: 0,
});

to.pause();

menu.addEventListener("click", () => {
  console.log("irr");
  to.play();
});
closeNav.addEventListener("click", () => {
  to.reverse();
});
