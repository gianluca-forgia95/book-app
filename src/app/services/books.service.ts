import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  getBooks(queryString: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q",queryString);
    queryParams = queryParams.append("maxResults", "10")
    const url = this.baseUrl;
    return this.http.get<any>(url, {params:queryParams});
  }
}