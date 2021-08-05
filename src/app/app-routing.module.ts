import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { UiDashboardComponent } from "./ui-dashboard/ui-dashboard.component";
import { ProductComponent } from "./product/product.component";
import { OrdersComponent } from "./orders/orders.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { UiFunctionsComponent } from "./ui-functions/ui-functions.component";

const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:'dashboard', component: UiDashboardComponent},
  {path:'product', component: ProductComponent},
  {path:'orders', component: OrdersComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'functions', component: UiFunctionsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
