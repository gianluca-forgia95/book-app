import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any = {};


  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params['id'];
    this.booksService.getBook(id)
    .subscribe(response => {
      this.book = response.volumeInfo;

    });


 

 
  }

}
