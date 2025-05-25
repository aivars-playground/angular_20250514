import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CatalogueComponent} from "./catalog/catalogue.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path: "home", component: HomeComponent, title: "SHOP|Home"},
  {path: "catalog", component: CatalogueComponent, title: "SHOP|Catalog"},
  {path: "cart", component: CartComponent, title: "SHOP|Cart"},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
