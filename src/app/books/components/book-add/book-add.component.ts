import { Component, OnInit } from '@angular/core';
import { BooksManagerService } from '../../services/books-manager.service';
import { IBook } from '../../models/book.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {


  name: string;
  author: string;
  imageUrl: string;

  constructor(private bookManagerService: BooksManagerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newIndex = this.bookManagerService.getBooks().length;
    const newBook: IBook = {
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      id:newIndex

    };
    this.bookManagerService.addNewBook(newBook);
    this.router.navigate(['']);
  }
}
