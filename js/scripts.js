/*eslint-env browser*/ /*exported side*/

// Making hamburger menu work by adding "moveRight" class //

function side() {
  "use strict";
  var nav = document.getElementById('nav'),
    wrapper = document.getElementById('wrapper'),
    hamburger = document.getElementById('hamburger');
  if (wrapper.classList.contains('moveRight')) {
    wrapper.classList.remove("moveRight");
    nav.classList.remove("moveRight");
    hamburger.classList.remove("moveRight");
  } else {
    wrapper.classList.add("moveRight");
    nav.classList.add("moveRight");
    hamburger.classList.add("moveRight");
    nav.classList.remove("scrolled");
  }
  return;
}

// Making navbar change on scroll and resize //

function iFixit() {
  "use strict";
  var nav = document.getElementById('nav'),
    wrapper = document.getElementById('wrapper'),
    hamburger = document.getElementById('hamburger');

  if (document.documentElement.clientWidth > 800 && window.pageYOffset > 110) {
    nav.classList.add("scrolled");
    wrapper.classList.remove("moveRight");
    nav.classList.remove("moveRight");
    hamburger.classList.remove("moveRight");
  } else if (document.documentElement.clientWidth > 800 && window.pageYOffset <= 110) {
    nav.classList.remove("scrolled");
    wrapper.classList.remove("moveRight");
    nav.classList.remove("moveRight");
    hamburger.classList.remove("moveRight");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.onscroll = window.onresize = window.onload = iFixit;

// Setting top margin of title to half of its height, setting bottom padding of previous parent //

function marginTop() {
  "use strict";
  var title = document.getElementsByClassName('title');
  for (var i = 0; i < title.length; i += 1) {
    title[i].style.marginTop = -(title[i].clientHeight / 2) + "px";
  }
  for (i = 0; i < title.length - 1; i += 1) {
    title[i].parentElement.style.paddingBottom = (title[i + 1].clientHeight - 40) + "px";
  }
}

window.onload = marginTop;
