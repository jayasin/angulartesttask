import { Component } from '@angular/core';

import SwiperCore, {
  Navigation,
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-trending-now-slider',
  templateUrl: './trending-now-slider.component.html',
  styleUrls: ['./trending-now-slider.component.scss']
})
export class TrendingNowSliderComponent {}
