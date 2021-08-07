import { Component, Input, OnChanges, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

}
