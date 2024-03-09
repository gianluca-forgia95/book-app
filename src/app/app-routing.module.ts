import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'books/:id', component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
