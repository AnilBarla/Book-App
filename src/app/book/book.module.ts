import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListBookComponent } from '../list-book/list-book.component';
import { ViewBookComponent } from '../view-book/view-book.component';


@NgModule({
  declarations: [
    AddBookComponent,
    ListBookComponent,
    ViewBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BookModule { }
