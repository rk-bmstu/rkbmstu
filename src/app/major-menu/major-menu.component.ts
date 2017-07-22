import { Component, OnInit, ElementRef } from '@angular/core';
import { LocationStrategy, Location } from '@angular/common';
import { Router }   from '@angular/router';

@Component({
  selector: 'major-menu',
  templateUrl: './major-menu.component.html',
  styleUrls: ['./major-menu.component.css']
})
export class MajorMenuComponent implements OnInit {

  console() { return console; }

  constructor(private location: Location, 
              private el: ElementRef,
              private router: Router)
  {
    router.events.subscribe((val) => {
      this.current();
    });
  }

  ngOnInit() {
    window.onload = window.onscroll = window.onresize = ()=> {
      this.logoSrcUpdate();
      this.iFixit();
      this.current();
    };
  }


  getElementsByClassName(name) {
    return this.el.nativeElement.getElementsByClassName(name);
  }

  logoSrcUpdate() {
    let i = 0;
    let logo = this.getElementsByClassName('logo');
    for (i = 0; i < logo.length; i++) {
      let img = logo[i].firstElementChild;
      if (!document.getElementById('nav').classList.contains('active')) {
        img.setAttribute('src', '/assets/img/logo.png');
      } else {
        img.setAttribute('src', '/assets/img/logo-wh.png');
      }
    }
  }


  // Removing "active" modifier class from all elements //
  removeActive() {
    let everyActive = this.getElementsByClassName('current');
    for (let active of everyActive) {
      active.classList.remove('current');
    }
    document.removeEventListener("touchmove", () => { this.freeze });
    document.body.classList.remove('noScroll');
    document.getElementById('nav').classList.remove('yeahScroll');
  }

  // Highlighting current link in the navbar by adding "current" class //
  current() {
    if (document.documentElement.clientWidth >= 800) {
      let navLinks = this.el.nativeElement.querySelectorAll('#nav a'); // All links inside the nav
      let offset = 0;
      let hilighter = document.getElementById("current-menu-item-mark");
      for (let link of navLinks) {
        let url = link.getAttribute('routerlink');
        if (link && link.offsetWidth) {
          offset += link.offsetWidth;
        }
        if (location.pathname == url) {
          hilighter.style.left = (offset - link.offsetWidth / 2) + "px";
          hilighter.style.width = link.offsetWidth + "px";
          return;
        }
      }
      hilighter.style.width = "0px";
    }
  }


  // Making navbar change on scroll and resize //
  iFixit() {
    var nav = document.getElementById('nav');

    if (document.documentElement.clientWidth >= 800 && window.pageYOffset > 110) {
      nav.classList.add("scrolled");
    } else
    if (document.documentElement.clientWidth >= 800 && window.pageYOffset <= 110) {
      nav.classList.remove("scrolled");
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

  deactive() {
    this.setupActive("remove");
    this.enableScroll();
    this.logoSrcUpdate();
  }

  inactive() {
    this.setupActive("add");
    this.disableScroll();
    this.logoSrcUpdate();
  }

  setupActive(direction) {
    let onactive = i => i.classList[direction]('active');
    Array.prototype.forEach.call(this.getElementsByClassName('logo'), onactive);
    Array.prototype.forEach.call(this.getElementsByClassName('menu'), onactive);
    onactive(document.getElementById('hamburger'));
    onactive(document.getElementById('nav'));
  }

  switchActive() {
    if (document.getElementById('nav').classList.contains('active')) {
      this.deactive();
    } else {
      this.inactive();
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
