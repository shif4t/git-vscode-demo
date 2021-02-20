// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// ENDDDDDDDDD //

// home section //
const hamburger = document.querySelector('.menu-btn');
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
// home section end //

// contact //
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const envelope = document.querySelector(".envelope");
const button = document.getElementById("button");
const cancel = document.getElementById("cancel");
// contact end //

//nav
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

let menuOpen = false;
hamburger.addEventListener('click', () => {
  if(!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
});

// contact
button.addEventListener("click", function(){
  popup.style.display = "flex";
  button.style.display = "none";
})
cancel.addEventListener("click", function(){
  popup.style.display = "none";
  button.style.display = "flex";
})
//contact end



//animation

const tl = new TimelineMax();

// hero section
tl.fromTo(
    hero,
    0.1, 
    {height: "20%"}, 
    {height:"80%"}
).fromTo(
    hero, 
    2, 
    {width: "80%"}, 
    {width: "0%"}
).fromTo(
    slider,
    1.2,
    { x: "-100%"},
    { x: "0%"},
    "-=0.6"
)
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(navLinks, 0.5, {opacity: 0}, {opacity: 1})
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0},"-=0.5")

.fromTo(
    hero, 
    1.2, 
    {width: "0%"}, 
    {width: "90%"},
    "-=0.5"
);
