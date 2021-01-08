import { Component, OnInit } from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  // @ts-ignore
  id: number;
  // @ts-ignore
  book: IBook;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = Number(id);
      this.getBookId(this.id);
    });
  }

  // tslint:disable-next-line:typedef
  getBookId(id: number) {
    this.bookService.getBookById(id).subscribe(result => {
      this.book = result;
    });
  }

}
