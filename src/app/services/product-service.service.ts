import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  /* Mock API Responses for the dependency injection  */
  newArrivals: Iproducts[] = [
    {
      image: '/assets/newarrivals/saree 1.jpg',
      title: 'Samuthirika Pattu',
      category: 'Silk',
      price: '10000',
      starRating: 5,
    },
    {
      image: '/assets/newarrivals/saree 2.jpg',
      title: 'Cotton saree',
      category: 'Cotton',
      price: '2000',
      starRating: 4,
    },
    {
      image: '/assets/newarrivals/saree 3.jpg',
      title: 'Synthetic Cotton saree',
      category: 'Mixed Silk',
      price: '4000',
      starRating: 3,
    },
    {
      image: '/assets/newarrivals/saree 4.jpg',
      title: 'Cotton saree',
      category: 'Mixed Silk',
      price: '40000',
      starRating: 5,
    },
    {
      image: '/assets/newarrivals/saree 5.jpg',
      title: 'Cotton saree',
      category: 'Mixed Silk',
      price: '15000',
      starRating: 3,
    },
  ];

  recentlyViewed = [
    {
      image: '/assets/recent/1.jpeg',
      title: 'Cotton saree',
      category: 'Saree',
      price: '15000',
      starRating: 4,
    },
    {
      image: '/assets/recent/2.jpg',
      title: 'vivila fashion',
      category: 'Mixed Silk',
      price: '1800',
      starRating: 3,
    },
    {
      image: '/assets/recent/3.jpeg',
      title: 'Anand SAREES',
      category: 'Silk Saree',
      price: '16300',
      starRating: 4,
    },
    {
      image: '/assets/recent/4.jfif',
      title: 'kashvi sarees',
      category: 'Mixed Silk',
      price: '15600',
      starRating: 2,
    },
    {
      image: '/assets/recent/5.jpg',
      title: 'Vrundavan ethics',
      category: 'Cotton Silk Saree',
      price: '18700',
      starRating: 5,
    },
]

similarItems = [{
  image: '/assets/similar/1.jpg',
  title: 'Lakme Lipstick',
  category: 'Lipstick',
  price: '50',
  starRating: 5,
},
{
  image: '/assets/similar/2.jpg',
  title: 'Marc Jacob Lipstick',
  category: 'Lipstick',
  price: '50',
  starRating: 5,
},

{
  image: '/assets/similar/3.jpg',
  title: 'Sun Glass',
  category: 'Lipstick',
  price: '300',
  starRating: 4,
},
{
  image: '/assets/similar/4.jpg',
  title: 'Lakme Kajal',
  category: 'Kajal Pencil',
  price: '150',
  starRating: 4,
},
{
  image: '/assets/similar/5.jpg',
  title: 'Kajal',
  category: 'Kajal Pencil',
  price: '150',
  starRating: 4,
}
]

  getNewArrivals(): Iproducts[] {
    return this.newArrivals;
  }

  getRecentlyViewed(): Iproducts[] {
    return this.recentlyViewed;
  }

  getSimilarItems(): Iproducts[] {
    return this.similarItems;
  }
}
