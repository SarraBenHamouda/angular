import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;
}

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      image: new FormControl(''),
      categoryId: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]),
      brand: new FormControl(''),
      promotion: new FormControl('', [Validators.pattern('^(0|[1-9][0-9]?)$')])
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  get price() {
    return this.myForm.get('price');
  }

  get categoryId() {
    return this.myForm.get('categoryId');
  }

  get promotion() {
    return this.myForm.get('promotion');
  }

  onSubmit() {
    if (this.myForm.valid) {
      const newProduct: Product = this.myForm.value;
      // Add the product to the product list here.
      console.log(newProduct);
      // Clear form after submission
      this.myForm.reset();
    }
  }
}
