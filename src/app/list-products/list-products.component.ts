import { Component } from '@angular/core';
import { Product2 } from '../models/product2';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  listProducts: Product[] = [
    {"id": 1, "name": "Refrigérateur LG Inox", "image": "assets/images/refrigerateur-lg.jpg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG"},
    {"id": 2, "name": "Refrigérateur Samsung Blanc", "image": "assets/images/refrigerateur_samsung.jpeg", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung"},
    {"id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/lave_vaisselle.png", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO"},
    {"id": 4, "name": "Oppo Smart Phone", "image": "assets/images/oppo_smart.jpg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO"},
    {"id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex"},
    {"id": 6, "name": "TV 50'' LG", "image": "assets/images/tv_lg.jpg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG"}
  ];

}
