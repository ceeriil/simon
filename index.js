const header = document.querySelector("header");
const profile = document.querySelector(".profile-info");
const showbox = document.querySelector("#websites");
const bars = document.querySelectorAll(".bars");
const navlinks = document.querySelectorAll("nav a");
const mediaQuery = window.matchMedia("(max-width: 667px)");

function toggleMenu() {
  header.classList.toggle("active");
}

/* function closeMenu() {
  if (mediaQuery.matches) {
    nav.style.transform = "translateX(700px)";
    profile.style.transform = "translateX(-700px)";
  } else {
    nav.style.transform = "translateX(0)";
    profile.style.transform = "translateX(0)";
  }
} */

/* function expand() {
  showbox.classList.toggle("active");
} */

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", toggleMenu);
});

//animate skill bar
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerpoint = (window.innerHeight / 4) * 4;

  bars.forEach((bar) => {
    const boxTop = bar.getBoundingClientRect().top;

    if (boxTop < triggerpoint) {
      bar.classList.add("show");
    } else {
      bar.classList.remove("show");
    }
  });
}

//darkmode
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

/* Custom cursor */
$(document).mousemove(function (e) {
  $(".cursor").eq(0).css({
    left: e.pageX,
    top: e.pageY,
  });
  setTimeout(function () {
    $(".cursor").eq(1).css({
      left: e.pageX,
      top: e.pageY,
    });
  }, 120);
});

$("a").on({
  mouseenter: function () {
    $(".cursor").addClass("big");
  },
  mouseleave: function () {
    $(".cursor").removeClass("big");
  },
});
$("button").on({
  mouseenter: function () {
    $(".cursor").addClass("big");
  },
  mouseleave: function () {
    $(".cursor").removeClass("big");
  },
});

/* gsap */
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scrub: false,
    pin: false,
    start: "top top",
    end: "+=100%",
  },
});

tl.from(".profile-rotate", {
  scale: 0.4,
  rotation: 135,
  ease: "power3",
}).from(".profile-rotate:before", {
  scale: 0.4,
  rotation: 135,
  ease: "power3",
});

const eye1 = document.querySelector(".pupil1");
const eye2 = document.querySelector(".pupil2");

window.addEventListener("mousemove", (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 20;
  const y = -(window.innerHeight * 4 - evt.pageY) / 70;
  eye1.style.transform = `translateY(${4 * y}px) translateX(${x}px)`;
  eye2.style.transform = `translateY(${4 * y}px) translateX(${x}px)`;
});
