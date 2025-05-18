import { Component } from '@angular/core';
import {IProduct} from './product/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  product: IProduct

  constructor() {
    this.product =   {
      id: 1,
      description: "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    }
  }

  getRobotPartImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
}
