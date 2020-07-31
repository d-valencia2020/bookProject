import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/book.interface'
import { BooksManagerService } from '../../services/books-manager.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: IBook[] = [];

  constructor(private booksManagerService: BooksManagerService) {
    

  }

  ngOnInit(): void {
    this.bookList =this.booksManagerService.getBooks();
  }


  
}
