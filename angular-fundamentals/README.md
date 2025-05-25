Angular Fundamentals
====================
* https://app.pluralsight.com/library/courses/fundamentals-angular
* https://github.com/jmcooper/joes-robot-shop/

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

safe navigation
---------------
`{{ product?.price?.toFixed(2) }}`

formatting
`product.price.toFixed(2)`
`product.price | currency:'GBP'`


classes
-------
`<div [class.strikethrough]="product.discount != 0">`
* conditional class binding - add class if...   what if more classes?
`<div [ngClass]="{ strikethrough: product.discount != 0}">`
`<div [ngClass]="getCssClasses(product)">`  ..call method returning string, string[], undefined

* bind style
`[style.color]="product.discount != 0 ? 'green':''"`


server
------
```shell
cd api-server
npm install
npm start
```
```shell
curl localhost:8081/api/products
```
```shell
curl localhost:8081/api/cart
```

***[proxy.conf.json](src/proxy.conf.json)
```json
{
  "/api": {
    "target": "http://localhost:8081",
    "secure": false
  }
}
```
[angular.json](angular.json)
```
projects.angular-fundamentals.architect.serve.configurations.development.proxyConfig: "src/proxy.conf.json"
```


routing
-------
* create a routing module (if not exists)
```shell
ng g module app-routing --flat --module=app
```

IMPORTANT
---------
when componrnt is loaded, from inside the componrnt, when <a> is pointing to self
```html
  <div class="filters">
  <a class="button" routerLink="/catalog/Heads">Heads</a>
  <a class="button" routerLink="/catalog/Arms">Arms</a>
  <a class="button" routerLink="/catalog/Torsos">Torsos</a>
  <a class="button" routerLink="/catalog/Bases">Bases</a>
  <a class="button" [routerLink]="['/catalog', '']">All</a>
</div>
```
and routing module uses path parrameters
```typescript
{path: "catalog/:filter", component: CatalogueComponent, title: "SHOP|Catalog"},
```
filter is mandatory, so whem passing empty filter - use `[routerLink]="['/catalog', '']`
and page, if already loaded, unless reloaded, it would ignore param changes, 
so page need to subscribe to changes in the path
```typescript
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filter = params['filter'] ?? '';
    })
  }
```
* better alternative - use query params (they can be optional)


active link
-----------
```html
    <a routerLink = "/home" routerLinkActive="active-css-style">Home</a>
```

bindings and forms
-----------------
`[(ngModel)]="credentials.email"` binds both dirrections


login
-----
see api server for hrdcoded credentials [index.js](api-server/index.js)


module
------
user functionality can be grouped into a module
```shell
ng g module user
```
