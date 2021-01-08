import { Component, OnInit } from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  // @ts-ignore
  listBook: IBook[];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.getAllBooks();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  getAllBooks(): IBook[] {
    this.bookService.getAllBook().subscribe((data: any) => {
      this.listBook = data;
      console.log(this.listBook);
    });
    return this.listBook;
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  deleteBook(id) {
    if (confirm('Are you sure?')){
      this.bookService.delete(id).subscribe(value => {
        console.log('Delete', value);
        this.getAllBooks();
      });
    }
  }

}
