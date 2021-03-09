import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {orderBy} from 'lodash';
import { ProductService } from './product.service';
import { Product } from './product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.initForm();
    this.productService.getProductsList().subscribe((products) => {
      this.products = products;
      this.products = orderBy(this.products, ['price']);
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: null,
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      price: ['', [Validators.required, Validators.pattern('/^-?(0|[1-9]')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]')]],
      store: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  addProduct(): void {
    const newProduct: Product = {
      id: null,
      name: this.form.get('name').value,
      price: this.form.get('price').value,
      quantity: this.form.get('quantity').value,
      store: this.form.get('store').value
    };
    this.productService.createProduct(newProduct).subscribe(value => window.location.assign('/products'));
    this.initForm();
  }

   updateProduct(id: number) {
    this.router.navigate(['/update-product', id]);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(value => window.location.assign('/products'));
  }

  InvalidInput(fieldName): boolean {
    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
  }
}
