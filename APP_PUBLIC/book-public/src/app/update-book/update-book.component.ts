import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Router } from 'express';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  public editBook: Book = {
    _id: '',
    name: '',
    price: '',
    author: '',
    genre: '',
    image:''
  };

  constructor(private bookService: BookServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    const bookid = this.route.snapshot.paramMap.get('bookid');
  

    this.bookService.getSingleBook(bookid as string)
      .then(book => {
        this.editBook = book as Book;
      })
  }

  public updateBook(editBook: Book): void {

    debugger
    this.bookService.updateBook(editBook)
      .then(editBook => {
        if (editBook) {
          //window.location.href = '/list';
          this.router.navigate(['/']);
        }
      })
  }
}