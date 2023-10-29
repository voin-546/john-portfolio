AOS.init({
    duration: 1200,
})
var burger = document.querySelector(".burger");
var header = document.querySelector("header");
document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(header);
  if ( !click ) {
    header.classList.remove("show");
    burger.classList.remove("open")
  }
})
burger.onclick = function () {
    burger.classList.toggle("open");
    header.classList.toggle("show")
};

var body = document.querySelector("body")
  window.onload=function() {
    if(localStorage.darkMode=="true") {
      body.classList.toggle('dark');
      toggle.classList.add("active");
    }
  };
  var toggle = document.querySelector(".ui-switch")
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.darkMode=(localStorage.darkMode=="true") ? "false" : "true";
    toggle.classList.toggle("active")
  });
