import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { UiNavComponent } from './ui-nav/ui-nav.component';
import { UiDashboardComponent } from './ui-dashboard/ui-dashboard.component';
import { LogComponent } from './log/log.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    UiNavComponent,
    UiDashboardComponent,
    LogComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
