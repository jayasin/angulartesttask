import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/products.model';

import SwiperCore, {
  Navigation,
 
  Virtual,
} from 'swiper/core';

SwiperCore.use([Navigation, Virtual]);

@Component({
  selector: 'app-common-slider',
  templateUrl: './common-slider.component.html',
  styleUrls: ['./common-slider.component.scss'],
})
export class CommonSliderComponent implements OnInit {
  @Input() sliderTitle: string;
  @Input() products: Iproducts[];

  constructor() {}

  ngOnInit(): void {
    console.log("the Priodcts", this.products)
  }

  onSwiper(swiper) {
    
  }
  onSlideChange() {
    
  }

  public getStarRating(rating: number) {
    switch (rating) {
      case 1:
        return 'one-star-rating';
      case 2:
        return 'two-star-rating';
      case 3:
        return 'three-star-rating';
      case 4:
        return 'four-star-rating';
      case 5:
        return 'four-star-rating';

      default:
        break;
    }
  }
}
