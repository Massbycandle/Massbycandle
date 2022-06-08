import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { HomeComponent } from './sections/home/home.component';
import { TitleComponent } from './shared/title/title.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProductsMainComponent } from './sections/products/products-main/products-main.component';
import { ProductCardComponent } from './sections/products/product-card/product-card.component';
import { AboutCandlesComponent } from './sections/about/about-candles/about-candles.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { AboutMassbyComponent } from './sections/about/about-massby/about-massby.component';
import { DynamicChildLoaderDirective } from './directives/dynamic-child-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GalleryComponent,
    HomeComponent,
    TitleComponent,
    AboutComponent,
    ContactComponent,
    ProductsMainComponent,
    ProductCardComponent,
    AboutCandlesComponent,
    AboutMassbyComponent,
    DynamicChildLoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
