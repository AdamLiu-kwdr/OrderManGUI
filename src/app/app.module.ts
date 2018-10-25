import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { UiNavComponent } from './ui-nav/ui-nav.component';
import { UiDashboardComponent } from './ui-dashboard/ui-dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoglistComponent } from './loglist/loglist.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    UiNavComponent,
    UiDashboardComponent,
    ProductComponent,
    LoglistComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
