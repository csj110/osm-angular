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
    height: 400,
    autoplay: {
      duration:1000,
    },
    loop: true
  };
  banners= [
    {
      id: 1,
      url:'http://dhccsh-shop-1256185801.cos.ap-shanghai.myqcloud.com/images/01mall/img_banner.png?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDoV1KVdJS6LPMMBdiUBqKcjeNzQhmIhaM%26q-sign-time%3D1562076661%3B1562077321%26q-key-time%3D1562076661%3B1562077321%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D004da0fb744d2d8029b139321a8b710e7f8db424'
    },
    {
      id: 2,
      url:'http://dhccsh-shop-1256185801.cos.ap-shanghai.myqcloud.com/images/01mall/img_banner.png?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDoV1KVdJS6LPMMBdiUBqKcjeNzQhmIhaM%26q-sign-time%3D1562076661%3B1562077321%26q-key-time%3D1562076661%3B1562077321%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D004da0fb744d2d8029b139321a8b710e7f8db424'
    },

  ]
  constructor() {

  }
  ngOnInit() {

  }


}
