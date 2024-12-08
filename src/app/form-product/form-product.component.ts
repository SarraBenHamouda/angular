// form-product.component.ts
import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  products: Product[] = [];

  onSubmit(productForm: any) {
    if (productForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1, // Auto-increment ID
        name: productForm.value.name,
        image: productForm.value.image,
        categoryId: productForm.value.categoryId,
        description: productForm.value.description,
        price: productForm.value.price,
        brand: productForm.value.brand,
    
      };
      this.products.push(newProduct);
      productForm.reset();
    }
  }
}
