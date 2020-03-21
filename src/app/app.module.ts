import { ContatoDataService } from './contato-data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { OrderService } from './order/order.service';
import { ShoppingCartService } from './restaurant-detail/shoping-cart/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ROUTES } from './app-routes';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { ShopingCartComponent } from './restaurant-detail/shoping-cart/shoping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsService } from 'src/restaurants.service';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { SumaryComponent } from './sumary/sumary.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShopingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    SumaryComponent,
    NotFoundComponent
     
  ],
  exports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    CarouselModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot()


    
  


  ],

  providers: [  RestaurantsService, ShoppingCartService, OrderService, ContatoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
