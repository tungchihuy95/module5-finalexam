import { Component, OnInit } from '@angular/core';
import {IBook} from '../../book';
import {BookService} from '../../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailBookComponent implements OnInit {
  // @ts-ignore
  book: IBook;
  constructor(private bookService: BookService,
              private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      // @ts-ignore
      this.getBookById(id);
    });
  }

  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    // @ts-ignore
    this.bookService.getBookById(id).subscribe(result => {
      this.book = result;
    });
  }
}
