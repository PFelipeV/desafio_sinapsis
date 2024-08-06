import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
