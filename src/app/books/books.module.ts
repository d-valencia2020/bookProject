import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookListComponent, BookAddComponent, BookDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [BookAddComponent, BookListComponent,BookDetailComponent]
})
export class BooksModule { }
