import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  getBooks(queryString: any, startIndex: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q",queryString);
    queryParams = queryParams.append("maxResults", "10");
    queryParams = queryParams.append("startIndex", startIndex);
    const url = this.baseUrl;
    return this.http.get<any>(url, {params:queryParams});
  }

  getBook(bookId: any) {
    const url = this.baseUrl + "/" + bookId;
    return this.http.get<any>(url);
  }
}
