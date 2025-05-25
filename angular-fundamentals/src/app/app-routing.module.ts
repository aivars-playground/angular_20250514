import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CatalogueComponent} from "./catalog/catalogue.component";
import {CartComponent} from "./cart/cart.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {TemplateFormControlsComponent} from "./test-only/template-form-controls/template-form-controls.component";

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent, title: "SHOP|Home"},
  {path: "catalog", component: CatalogueComponent, title: "SHOP|Catalog"},
  {path: "cart", component: CartComponent, title: "SHOP|Cart"},
  {path: "sign-in", component: SignInComponent, title: "SHOP|Sign-in"},
  {path: "test-only/form", component: TemplateFormControlsComponent, title: "TEST|Form"},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
