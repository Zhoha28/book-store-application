import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpResponse} from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})

export class BookServiceService { 
  private booksUrl = 'http://localhost:3000/api/books';
  constructor(private http: HttpClient) {}
  getBooks(): Promise<void | Book[]> {
    return this.http
      .get(this.booksUrl)
      .toPromise()
      .then((response) => response as Book[])
      .catch(this.handleError);
  }
  getSingleBook(bookId: string): Promise<void | Book>{ 
    return this.http.get(this.booksUrl + '/' + bookId) 
      .toPromise() 
      .then(response => response as Book) 
      .catch(this.handleError); 
  } 
  createBook(newBook: Book): Promise<void | Book> { 
    return this.http.post(this.booksUrl, newBook) 
      .toPromise() 
      .then(response => response as Book) 
      .catch(this.handleError); 
  }



  updateBook(newBook: Book): Promise<void | Book> { 
    return this.http.put(this.booksUrl+'/'+newBook._id, newBook) 
      .toPromise() 
      .then(response => response as Book) 
      .catch(this.handleError); 
  }

  deleteBook(bookId: string): Promise<void | Book> {
    return this.http.delete(this.booksUrl + '/' + bookId)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('error', error);
  }
}