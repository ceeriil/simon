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
