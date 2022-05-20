import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  public newBook = new Book();

  constructor(private bookService: BookServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const bookid = this.route.snapshot.paramMap.get('bookid');

    this.bookService.deleteBook(bookid as string)
      .then(book => {
        this.newBook = book as Book; 
        // window.location.href = "/list";
      });
  }
}
