import { Component, OnInit, ElementRef, isDevMode } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public isDevMode = isDevMode;

  constructor(private el: ElementRef) {   }

  ngOnInit() {
  }



}
