/*eslint-env browser*/ /*exported */

"use strict";


// Setting top margin of title to half of its height, setting bottom padding of previous parent //

function marginTop() {
	var title = document.getElementsByClassName('title');
	for (var i = 0; i < title.length; i++) {
		title[i].style.marginTop = -(title[i].clientHeight / 2) + "px";
	}
	for (i = 0; i < title.length - 1; i++) {
		title[i].parentElement.style.paddingBottom = (title[i + 1].clientHeight - 40) + "px";
	}
}


// Highlighting current link in the navbar by adding "current" class //

function current() {
	if (document.documentElement.clientWidth >= 800) {
		var navLinks = document.querySelectorAll('#nav a'); // All links inside the nav

		for (var i = 0; i < navLinks.length; i++) {
			var link = navLinks[i],
				url = link.getAttribute('href');
			if (window.location.href == url) {
				link.classList.add('current');
			}
		}
	}
}


// Highlighting current link in the navbar by adding "current" class //

document.addEventListener("DOMContentLoaded", function initialJS() {
	marginTop();
	current();
});
