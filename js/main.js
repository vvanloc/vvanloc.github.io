var type = new Typed(".typed", {
  strings: ["A student with a passion for AI / ML.", "Let me show you what I can do ❤️"],
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 500,
  // backspacing speed
  backSpeed: 30,
  // time before backspacing
  backDelay: 1000,
  // loop
  loop: true,
  // false = infinite
  loopCount: false,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: "html"
  // call when done callback function
  // callback: function() {},
  // // starting callback function before each string
  // preStringTyped: function() {},
  // //callback for every typed string
  // onStringTyped: function() {},
  // // callback for reset
  // resetCallback: function() {}
});

$("#wrapper").click(function() {
  $(".icon").toggleClass("close");
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
});

$(window).resize(function() {
  var w = $(window).width();
  var element = document.getElementById("name-effect");
  var x = document.getElementById("menu");
  if (w <= 760) {
    element.className = element.className.replace(/\glitch-effect\b/g, "");
    x.style.display = "none";
  } else if (!element.classList.contains("glitch-effect")) {
    element.classList.add("glitch-effect");
    x.style.display = "inline-flex";
  }
});

$(document).ready(function() {
  let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

  if (isMobile) {
    var element = document.getElementById("name-effect");
    element.className = element.className.replace(/\glitch-effect\b/g, "");
    var x = document.getElementById("menu");
    x.style.display = "none";
  }
});
