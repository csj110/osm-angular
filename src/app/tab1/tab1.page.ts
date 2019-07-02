import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    effect: 'cube',
    height: 400,
    duration:500,
    loop: true
  };
  constructor() {

  }
  ngOnInit() {

  }
  handleInit(e) {
    e.target.startAutoplay();
  }

}
