/*jslint devel: true*/
function side() {
    "use strict";
    var nav = document.getElementById('nav');
    var wrapper = document.getElementById('wrapper');
    var button = document.getElementById('hamburger');
    if (wrapper.classList.contains('moveRight')) {
        wrapper.classList.remove("moveRight");
        nav.classList.remove("moveRight");
        button.classList.remove("moveRight");
    } else {
        wrapper.classList.add("moveRight");
        nav.classList.add("moveRight");
        button.classList.add("moveRight");
        nav.classList.remove("scrolled");

    }
    return;
}

window.onscroll = function () {
    "use strict";
    var nav = document.getElementById('nav');
    if (document.documentElement.clientWidth > 800 && window.pageYOffset > 110) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

}

window.onresize = function () {
    "use strict";
    var nav = document.getElementById('nav');
    var wrapper = document.getElementById('wrapper');
    var button = document.getElementById('hamburger');

    if (document.documentElement.clientWidth > 800 && window.pageYOffset > 110) {
        nav.classList.add("scrolled");
        wrapper.classList.remove("moveRight");
        nav.classList.remove("moveRight");
        button.classList.remove("moveRight");
    } else if (document.documentElement.clientWidth > 800 && window.pageYOffset <= 110) {
        nav.classList.remove("scrolled");
        wrapper.classList.remove("moveRight");
        nav.classList.remove("moveRight");
        button.classList.remove("moveRight")
    } else {
        nav.classList.remove("scrolled");
    }

}

window.onload = function () {
    "use strict";
    var nav = document.getElementById('nav');
    var wrapper = document.getElementById('wrapper');
    var button = document.getElementById('hamburger');

    if (document.documentElement.clientWidth > 800 && window.pageYOffset > 110) {
        nav.classList.add("scrolled");
        wrapper.classList.remove("moveRight");
        nav.classList.remove("moveRight");
        button.classList.remove("moveRight");
    } else if (document.documentElement.clientWidth > 800 && window.pageYOffset <= 110) {
        nav.classList.remove("scrolled");
        wrapper.classList.remove("moveRight");
        nav.classList.remove("moveRight");
        button.classList.remove("moveRight")
    } else {
        nav.classList.remove("scrolled");
    }

}
