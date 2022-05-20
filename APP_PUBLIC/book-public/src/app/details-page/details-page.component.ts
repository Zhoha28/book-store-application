import { Component, OnInit } from '@angular/core';
import { Book } from '../book'; 
import { BookServiceService } from '../book-service.service';
import { switchMap } from 'rxjs/operators'; 
import { ActivatedRoute, Params } from '@angular/router'; 
 


@Component({ 
  selector: 'app-details-page', 
  templateUrl: './details-page.component.html', 
  styleUrls: ['./details-page.component.css'], 
  providers: [BookServiceService] 
}) 
export class DetailsPageComponent implements OnInit {

  pageContent = { 
    header: { 
      title: '', body: '' 
    } 
  }; 
  

  public newBook = new Book(); 
  constructor(private bookService: BookServiceService, private route: ActivatedRoute) { } 
 
ngOnInit(): void { 

  const bookid = this.route.snapshot.paramMap.get('bookid');

    this.route.params.pipe(switchMap((params: Params) => { 
      return this.bookService.getSingleBook(params['bookid']); 
    })) 
    // tbiskfoodService.getSingleFood(bookid as string)
    //   .then(good => {
    //     this.newBook = Food as unknown as Food;
    //     this.pageContent.header.title = this.newBook.name;
    //     this.pageContent.header.body = "Details for selected food.";

      .subscribe((newBook) => { 
        console.log('Selected Book', newBook); 
        this.newBook = newBook as Book; 
        this.pageContent.header.title = this.newBook.name; 
        this.pageContent.header.body = 'Details for selected Food.'; 
      }); 
  }

}
