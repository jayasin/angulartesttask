import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { LandingSliderComponent } from './components/landing-slider/landing-slider.component';
import { SwiperModule } from 'swiper/angular';
import { SaleItemComponent } from './components/sale-item/sale-item.component';
import { CommonSliderComponent } from './components/common-slider/common-slider.component';
import { TrendingNowSliderComponent } from './components/trending-now-slider/trending-now-slider.component';
import { SubheadingComponent } from './components/subheading/subheading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingSliderComponent,
    SaleItemComponent,
    CommonSliderComponent,
    TrendingNowSliderComponent,
    SubheadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
