import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { FormProductComponent } from './form-product/form-product.component';
import { CardComponent } from './card/card.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductCategoryComponent,
    ProductsCategoryQPComponent,
    AddProductReactiveComponent,
    FormProductComponent,
    CardComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
