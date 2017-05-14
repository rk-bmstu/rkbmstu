/*jslint devel: true*/

window.onscroll = function () {
    "use strict";
    console.log(window.pageYOffset);
    var nav = document.getElementById('nav');
    if (window.pageYOffset > 110) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};
