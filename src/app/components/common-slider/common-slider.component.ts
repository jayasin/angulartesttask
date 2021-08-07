import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-slider',
  templateUrl: './common-slider.component.html',
  styleUrls: ['./common-slider.component.scss']
})
export class CommonSliderComponent implements OnInit {

  @Input() sliderTitle: string;

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
