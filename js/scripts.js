/*eslint-env browser*/ /*exported active*/

"use strict";


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


// Fixing overflow //

function fixScroll() {
	var i = 0,
		body = document.getElementsByTagName('body');

	for (i = 0; i < body.length; i++) {
		body[i].classList.toggle('noScroll');
	}

	document.getElementById('nav').classList.toggle('yeahScroll');
}


// Removing overflow //

function removeScroll() {
	var i = 0,
		body = document.getElementsByTagName('body');

	for (i = 0; i < body.length; i++) {
		body[i].classList.remove('noScroll');
	}

	document.getElementById('nav').classList.remove('yeahScroll');
}


// Making hamburger menu work by adding "active" modifier class //

function active() {
	var i = 0,
		logo = document.getElementsByClassName('logo'),
		menu = document.getElementsByClassName('menu');

	document.getElementById('hamburger').classList.toggle('active');
	document.getElementById('nav').classList.toggle('active');

	for (i = 0; i < logo.length; i++) {
		logo[i].classList.toggle('active');
	}

	for (i = 0; i < menu.length; i++) {
		menu[i].classList.toggle('active');
	}

	fixScroll();
}


// Removing "active" modifier class from all elements //

function removeActive() {
	var i = 0,
		everyActive = document.getElementsByClassName('active');

	for (i = 0; i < everyActive.length; i++) {
		everyActive[i].classList.remove('active');
	}
	removeScroll();
}

// Making navbar change on scroll and resize //

function iFixit() {
	var nav = document.getElementById('nav');

	if (document.documentElement.clientWidth >= 800 && window.pageYOffset > 110) {
		nav.classList.add("scrolled");
		removeActive();
	} else
	if (document.documentElement.clientWidth >= 800 && window.pageYOffset <= 110) {
		nav.classList.remove("scrolled");
		removeActive();
	} else {
		nav.classList.remove("scrolled");
	}
}


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


// Load functions on scroll, resize and load //

function autoLoad() {
	marginTop();
	current();
	iFixit();
}

window.onscroll = window.onresize = window.onload = autoLoad;
