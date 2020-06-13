import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { MaterialModule } from '../material/material.module'
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './component/order/order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
  ]

})

export class OrderModule { }
