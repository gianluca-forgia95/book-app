import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {

  queryString = new FormControl('');

  books: any = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.queryString.valueChanges.subscribe((val)=> {
      if (val !== "") {
        this.booksService.getBooks(val).subscribe((response)=> {
          this.books = response.items ? response.items : [];
        });
      } else {
        this.books = [];
      }
    });
  }
// <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>

}
