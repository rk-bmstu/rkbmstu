/*jslint devel: true*/

window.onscroll = function () {
    "use strict";
    console.log(window.pageYOffset);
    var nav = document.getElementById('nav');
    var labelid = document.getElementById('labelid');
    if (window.pageYOffset > 110) {
        nav.classList.add("scrolled");
        labelid.classList.add("scrolled");

    } else {
        nav.classList.remove("scrolled");
        labelid.classList.remove("scrolled");
    }
};
