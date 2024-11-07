import { Injectable } from '@angular/core';
import { IProduct } from '../../assets/Shared/Interface/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  fetchProducts(): IProduct[]{
    return [
      {
        "productid":1,
        "imageUrl":"assets/images/img2.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":2,
        "imageUrl":"assets/images/img3.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":3,
        "imageUrl":"assets/images/img4.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":4,
        "imageUrl":"assets/images/img5.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":5,
        "imageUrl":"assets/images/img6.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":6,
        "imageUrl":"assets/images/img7.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":7,
        "imageUrl":"assets/images/img8.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      },
      {
        "productid":9,
        "imageUrl":"assets/images/img9.png",
        "description":"News Title Lorem Ipsum Dolor Sit Amet",
        "time":"1 Hour Ago",
        "channel":"CNN Indonesia"
      }
    ]
  }
  constructor() { }
}
