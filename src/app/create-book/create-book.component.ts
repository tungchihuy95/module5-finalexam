import { Component, OnInit } from '@angular/core';
import {IBook} from '../book';
import {Router} from '@angular/router';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
// @ts-ignore
  newBookForm: FormGroup;
  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.newBookForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  // tslint:disable-next-line:typedef
  createBook(){
    const newB: IBook = this.newBookForm.value;
    this.bookService.create(newB).subscribe(() => {
      alert('Create successfully!');
      this.router.navigate(['listBook']);
    });
  }
}
