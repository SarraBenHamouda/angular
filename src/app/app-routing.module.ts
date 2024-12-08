import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from '../../src/app/product-category/product-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:"products", component:ProductsCategoryQPComponent},
  {path:"products/:id", component:ProductCategoryComponent},
  { path: 'add-product', component: FormProductComponent },
  {path:"addreactive", component:AddProductReactiveComponent},
//   {path:'/products', loadChildren: ()=>import('./product/product.module').then(m=>m.ProductModule)},

// {path:'/contact', loadChildren: ()=>import('./contact/contact.module').then(m=>m.ContactModule)}, {path:'/profile', loadChildren: ()=>import('./profile/profile.module').then(m=>m.ProfileModule)},

// {path:'/apropos', loadChildren: ()=>import('./apropos/apropos.module').then(m=>m.AproposModule)},
  // { path: "**", component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
