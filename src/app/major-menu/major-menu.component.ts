import { Component, OnInit, ElementRef } from '@angular/core';
import { LocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'major-menu',
  templateUrl: './major-menu.component.html',
  styleUrls: ['./major-menu.component.css']
})
export class MajorMenuComponent implements OnInit {

  constructor(private location: Location, private el: ElementRef) { }

  ngOnInit() {
    this.current();


    window.onload = window.onscroll = window.onresize = ()=> {
      this.logoSrc();
      this.iFixit();
    };
  }


  getElementsByClassName(name) {
    return this.el.nativeElement.getElementsByClassName(name);
  }

  logoSrc() {
    let i = 0;
    let logo = this.getElementsByClassName('logo');
    for (i = 0; i < logo.length; i++) {
      if (!document.getElementById('nav').classList.contains('active')) {
        var img = logo[i].firstElementChild;
        img.setAttribute('src', '/assets/img/logo.png');
      } else {
        img = logo[i].firstElementChild;
        img.setAttribute('src', '/assets/img/logo-wh.png');
      }
    }
  }


  // Removing "active" modifier class from all elements //
  removeActive() {
    var i = 0,
      everyActive = this.getElementsByClassName('active');

    for (i = 0; i < everyActive.length; i++) {
      everyActive[i].classList.remove('active');
    }
    document.removeEventListener("touchmove", () => { this.freeze });
    document.body.classList.remove('noScroll');
    document.getElementById('nav').classList.remove('yeahScroll');
  }

  // Highlighting current link in the navbar by adding "current" class //
  current() {
    if (document.documentElement.clientWidth >= 800) {
      var navLinks = this.el.nativeElement.querySelectorAll('#nav a'); // All links inside the nav

      for (let link of navLinks) {
        let url = link.getAttribute('href');
        if (location.pathname == url) {
          link.classList.add('current');
        }
      }
    }
  }


  // Making navbar change on scroll and resize //
  iFixit() {
    var nav = document.getElementById('nav');

    if (document.documentElement.clientWidth >= 800 && window.pageYOffset > 110) {
      nav.classList.add("scrolled");
      this.removeActive();
    } else
    if (document.documentElement.clientWidth >= 800 && window.pageYOffset <= 110) {
      nav.classList.remove("scrolled");
      this.removeActive();
    } else {
      nav.classList.remove("scrolled");
    }
  }


  // From http://stackoverflow.com/a/43860705
  // "hidden" is the class of the overlay (fixed element) that has "position: fixed"
  // Call disableScroll() and enableScroll() to toggle
  freeze(e) {
    if (!document.getElementById("nav").contains(e.target)) {
      e.preventDefault();
    }
  }

  active() {
    let i = 0;
    let logo = this.getElementsByClassName('logo');
    let menu = this.getElementsByClassName('menu');

    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');

    for (i = 0; i < logo.length; i++) {
      logo[i].classList.toggle('active');
    }
    this.logoSrc();

    for (i = 0; i < menu.length; i++) {
      menu[i].classList.toggle('active');
    }
    if (!document.getElementById('nav').classList.contains('active')) {
      this.enableScroll();
    } else {
      this.disableScroll();
    }
  }


  disableScroll() {
    document.body.classList.add('noScroll');

    // Only accept touchmove from fixed-element
    document.addEventListener('touchmove', this.freeze, false);

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

  enableScroll() {
    document.removeEventListener("touchmove", this.freeze);
    document.body.classList.remove('noScroll');
    document.getElementById('nav').classList.remove('yeahScroll');
  }

}
