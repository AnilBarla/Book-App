import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListOrderComponent } from '../list-order/list-order.component';


@NgModule({
  declarations: [
    ListOrderComponent,    
    MyOrdersComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OrderModule { }
