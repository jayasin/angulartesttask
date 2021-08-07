import { Component } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.scss']
})
export class LandingSliderComponent {
  autoPlayProps = {
    delay: 2500,
    disableOnInteraction: false
  }
}
