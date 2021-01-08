import { Component, OnInit } from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  id: any;
  // @ts-ignore
  book: IBook;
  // @ts-ignore
  form: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
    });
    // lay id tu url
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
// Tìm book bằng Id và gán nó với đối tượng book, link với formGroup
      // @ts-ignore
      this.bookService.getBookById(this.id).subscribe(result => {
        this.book = result;
        this.form.patchValue(this.book);
      });
    });
  }
  // tslint:disable-next-line:typedef
  updateBook() {
    if (!this.form.invalid) {
      this.book.title = this.form.value.title;
      this.book.author = this.form.value.author;
      this.book.description = this.form.value.description;
      const {value} = this.form;
      const data = {
        ...this.book,
        ...value
      };
      console.log(data);

      this.bookService.update(data).subscribe(result => {
          alert('Update successfully!');
          this.router.navigate(['listBook']);
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
