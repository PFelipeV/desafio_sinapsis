import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'home-page',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class HomePageComponent {
  products$: Observable<Product[]>;
  selectedProduct: Product | null = null;

  constructor(
    public products: ProductsService,
    public cart: CartService
  ) {
    this.products$ = this.products.fetchAll();
  }

  showProductDetail(product: Product) {
    this.selectedProduct = product;
  }

  closeProductDetail() {
    this.selectedProduct = null;
  }
}
