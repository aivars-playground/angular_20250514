import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../cataloge/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;
  @Output() buy: EventEmitter<any> = new EventEmitter();

  getRobotPartImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }

  getCssClasses(product: IProduct) {
    return product.discount != 0
      ? ['strikethrough', 'bold']
      : []
  }

  buyButtonClicked(product: IProduct) {
    console.log("------------emmiting buy:"+ product)
    this.buy.emit();
  }

}
