import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateBookComponent } from './books/create-book/create-book.component';
import { ListBookComponent } from './books/list-book/list-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';
import { DetailBookComponent } from './books/detail-book/detail-book.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
