import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  queryString = new FormControl('');

  paginatedData: any[] = []
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: any;

  showData = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.queryString.valueChanges.subscribe((val)=> {
      let queryStr;
      if (val == "") {
        queryStr = null;
      } else {
        queryStr = this.queryString.value;
      }
      if (queryStr == null) {
        this.paginatedData = [];
        this.currentPage = 1;
        this.showData = false;
      } else {
        this.fetchData(queryStr);
        this.showData = true;
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
            if (!this.paginatedData.length) {
              this.showData = false;
              this.currentPage = 1;
            } else {
              this.showData = true;
            }
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
