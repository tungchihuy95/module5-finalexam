import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {DetailComponent} from './detail/detail.component';

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
    path: 'deleteBook/:id',
    component: DeleteBookComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
