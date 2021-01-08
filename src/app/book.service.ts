import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private URL_API = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  create(book: IBook): Observable<any> {
    return this.http.post<IBook>(this.URL_API, book);
  }

  update(book: IBook): Observable<any> {
    return this.http.put<IBook>(this.URL_API + `/${book.id}`, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(  `${this.URL_API}/${id}`);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.URL_API}/${id}`);
  }
}
