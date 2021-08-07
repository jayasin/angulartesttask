import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements OnInit {

  @Input() productImage: string;
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() saleAmount: string;
  @Input() rating: string;




  

  constructor() { }

  ngOnInit(): void {
  }

}
