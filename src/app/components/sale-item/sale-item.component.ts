import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements OnInit, OnChanges {

  @Input() productImage: string;
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() saleAmount: string;
  @Input() rating: string;
  public favSelect: boolean = false
  public cartSelect: boolean = false

  constructor(
    public favservice: FavouriteService,
    public cartservice: CartService

  ) { }

  ngOnInit(): void {
  }

  likeSupport() {

    this.favSelect = !this.favSelect
    if (this.favSelect) {
      this.favservice.likeSupport = this.favservice.likeSupport + 1
      this.favservice.setSharedData(this.favservice.likeSupport)


    } else {
      this.favservice.likeSupport = this.favservice.likeSupport - 1
      this.favservice.setSharedData(this.favservice.likeSupport)


    }
    console.log(this.favservice.likeSupport);

  }


  cartSupport() {
    this.cartSelect = !this.cartSelect
    if (this.cartSelect) {
      this.cartservice.cartSupport = this.cartservice.cartSupport + 1


    } else {
      this.cartservice.cartSupport = this.cartservice.cartSupport - 1

    }
    this.cartservice.setSharedData(this.cartservice.cartSupport)

  }

  ngOnChanges(): void {

  }

}
