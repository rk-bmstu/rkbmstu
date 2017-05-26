/*eslint-env browser*/ /*exported active*/

"use strict";


// From http://stackoverflow.com/a/43860705
// "hidden" is the class of the overlay (fixed element) that has "position: fixed"
// Call disableScroll() and enableScroll() to toggle

function freeze(e) {
	if (!document.getElementById("nav").contains(e.target)) {
		e.preventDefault();
	}
}

function disableScroll() {
	document.body.classList.add('noScroll');

	// Only accept touchmove from fixed-element
	document.addEventListener('touchmove', freeze, false);

	// Prevent background scrolling
	document.getElementById("nav").addEventListener("touchmove", function (e) {
		var top = this.scrollTop,
			totalScroll = this.scrollHeight,
			currentScroll = top + this.offsetHeight;

		if (top === 0 && currentScroll === totalScroll) {
			e.preventDefault();
		} else if (top === 0) {
			this.scrollTop = 1;
		} else if (currentScroll === totalScroll) {
			this.scrollTop = top - 1;
		}
	});
	document.getElementById('nav').classList.add('yeahScroll');
}

function enableScroll() {
	document.removeEventListener("touchmove", freeze);
	document.body.classList.remove('noScroll');
	document.getElementById('nav').classList.remove('yeahScroll');
}

function logoSrc() {
	var i = 0,
		logo = document.getElementsByClassName('logo');
	for (i = 0; i < logo.length; i++) {
		if (!document.getElementById('nav').classList.contains('active')) {
			var img = logo[i].firstElementChild;
			img.setAttribute('src', 'img/logo.png');
		} else {
			img = logo[i].firstElementChild;
			img.setAttribute('src', 'img/logo-wh.png');
		}
	}
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
	logoSrc();

	for (i = 0; i < menu.length; i++) {
		menu[i].classList.toggle('active');
	}
	if (!document.getElementById('nav').classList.contains('active')) {
		enableScroll();
	} else {
		disableScroll();
	}
}


// Removing "active" modifier class from all elements //

function removeActive() {
	var i = 0,
		everyActive = document.getElementsByClassName('active');

	for (i = 0; i < everyActive.length; i++) {
		everyActive[i].classList.remove('active');
	}
	enableScroll();
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


// Dim background on tile hover
/*
function dim() {
	var darken = document.getElementById('darken');
	darken.classList.add('dimmed');
}

function undim() {
	var darken = document.getElementById('darken');
	darken.classList.remove('dimmed');
}
*/

Array.from(document.getElementsByClassName('outer')).forEach(function (element) {
	element.addEventListener('mouseenter', function () {
		var darken = document.getElementById('darken');
		darken.classList.add('dimmed');
		element.classList.add('over');
	});
});

Array.from(document.getElementsByClassName('outer')).forEach(function (element) {
	element.addEventListener('mouseleave', function () {
		var darken = document.getElementById('darken');
		darken.classList.remove('dimmed');
		element.classList.remove('over');
	});
});


/*
for (var i = 0; i < document.getElementsByClassName('outer').length; i++) {
	document.getElementsByClassName('outer')[i].addEventListener('mouseover', dim);

}

for (i = 0; i < document.getElementsByClassName('outer').length; i++) {
	document.getElementsByClassName('outer')[i].addEventListener('mouseout', undim);
}
*/
// Load functions on scroll, resize and load //

function laterJS() {
	logoSrc();
	iFixit();
}

window.onload = window.onscroll = window.onresize = laterJS;
