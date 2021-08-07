import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-trending-now-slider',
  templateUrl: './trending-now-slider.component.html',
  styleUrls: ['./trending-now-slider.component.scss']
})
export class TrendingNowSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
