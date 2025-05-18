Angular Fundamentals
====================
* https://app.pluralsight.com/library/courses/fundamentals-angular

```shell
npm start
```
```shell
ng generate component home
```

component lifecycles
--------------------
https://v17.angular.io/guide/lifecycle-hooks
```
import { Component, OnInit, OnChanges } from '@angular/core';`
export class HomeComponent implements OnInit {
  ngOnInit():void {
    dosomething, (fetch data)
  }
}
```

binding data
------------
**** binding - if data changes, html page is updated!!! -- binding!!!
* bind data
`<div class="name">{{ product.name }}</div>`

* interpolation, bind to componnent property
`<img src="{{ '/assets/images/robot-parts/' + product.imageName }}" alt="{{product.name}}" />`

* bind attribute //one way binding!!!!
`<img [src]="'/assets/images/robot-parts/' + product.imageName" [alt]="product.name" />`

* bind attribute to function
`<img [src]="getRobotPartImageUrl(product)" [alt]="product.name" />`

iterate
-------
`<li class="product-item" *ngFor="let product of products">`
`*ngFor - asterisk means it changes html....



binding direction
-----------------
* `[src]`     square bracket - component to template
* `(clicl)`   parenthesid    - template to component


