import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorPipe } from './author.pipe';
import { YearPipe } from './year.pipe';
import { TitlePipe } from './title.pipe';
import { PricePipe } from './price.pipe';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { RatingComponent } from './rating/rating.component';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,    
    TitlePipe,
    AuthorPipe,
    PricePipe,
    YearPipe,
    HeaderComponent,    
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BookModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
