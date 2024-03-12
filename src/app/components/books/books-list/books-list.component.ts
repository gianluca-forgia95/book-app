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

  paginatedData: any[] = []
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.queryString.valueChanges.subscribe((val)=> {
      if (val == "") {
        this.paginatedData = []
      } else {
        this.fetchData(val);
      }
    });
  }

 
  fetchData(queryStr?: any) {
        let val;
        if (queryStr) {
          val = queryStr;
        } else {
          val = this.queryString.value;
        }
        if (val != "") {
          const start = (this.currentPage - 1) * this.itemsPerPage;
          this.booksService.getBooks(val, start).subscribe((response)=> {
            this.paginatedData = response.items ? response.items : [];
            this.totalItems = response.totalItems;
          });
        } else {
          this.paginatedData = []
        }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }


 

}
