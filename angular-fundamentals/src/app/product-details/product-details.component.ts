import {Component, Input} from '@angular/core';
import {IProduct} from "../catalogue/product/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;

  getRobotPartImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }

  getCssClasses(product: IProduct) {
    return product.discount != 0
      ? ['strikethrough', 'bold']
      : []
  }

  addToCart(product: IProduct) {
    console.log("------------add to cart:"+ product)
  }

}
