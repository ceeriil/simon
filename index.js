const nav = document.querySelector("nav");
const profile = document.querySelector(".profile-info");
const showbox = document.querySelector("#websites");
const bars = document.querySelectorAll(".bars");
const navlinks = document.querySelectorAll("nav a");
const mediaQuery = window.matchMedia("(max-width: 667px)");

function openMenu() {
  nav.style.transform = "translateX(0)";
  profile.style.transform = "translateX(0)";
}

function closeMenu() {
  if (mediaQuery.matches) {
    nav.style.transform = "translateX(700px)";
    profile.style.transform = "translateX(-700px)";
  } else {
    nav.style.transform = "translateX(0)";
    profile.style.transform = "translateX(0)";
  }
}

function expand() {
  showbox.classList.toggle("active");
}

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", closeMenu);
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

//animate contact form
var card = document.getElementById("contact-card");
function submitMessage() {
  card.style.transform = "rotateX(-180deg)";
}
function openContact() {
  card.style.transform = "rotateX(0deg)";
}

//darkmode
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

//typing Effect
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.08em solid var(--text-color)}";
  document.body.appendChild(css);
};

Resources;
