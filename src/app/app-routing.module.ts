import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './books/list-book/list-book.component';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {UpdateBookComponent} from './books/update-book/update-book.component';
import {DeleteBookComponent} from './books/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: 'listBook',
    component: ListBookComponent
  },
  {
    path: 'createBook',
    component: CreateBookComponent
  },
  {
    path: 'updateBook/:id',
    component: UpdateBookComponent
  },
  {
    path: 'deleteBook',
    component: DeleteBookComponent
  },
  {
    path: 'details/:id',
    component: ListBookComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
