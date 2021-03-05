import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productId: number;
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.product = {} as Product;
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  onSubmit(): void {
    this.productService.updateProduct(this.productId, this.product).subscribe(data => window.location.assign('/products')
    );
  }

  Cancel(): void {
    this.router.navigate(['/products']);
  }

}
