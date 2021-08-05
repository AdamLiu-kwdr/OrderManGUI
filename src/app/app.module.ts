import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';

import { OrdersComponent } from './orders/orders.component';
import { UiNavComponent } from './ui-nav/ui-nav.component';
import { UiDashboardComponent } from './ui-dashboard/ui-dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoglistComponent } from './loglist/loglist.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './/app-routing.module';
import { UiFunctionsComponent } from './ui-functions/ui-functions.component';
import { UiOrderDeleteComponent } from './ui-order-delete/ui-order-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    UiNavComponent,
    UiDashboardComponent,
    ProductComponent,
    LoglistComponent,
    ScheduleComponent,
    UiFunctionsComponent,
    UiOrderDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UiOrderDeleteComponent]
})
export class AppModule { }
