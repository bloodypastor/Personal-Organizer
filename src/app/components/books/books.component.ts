
import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../services/books.service';
import { Books } from './../../models/books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Books[];
  editState: boolean = false;
  bookToEdit: Books;

  constructor(private booksSrvice: BooksService) { 
   
  }

  ngOnInit() {
    this.booksSrvice.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  deleteBook(event, books: Books) {
    this.clearState();
    this.booksSrvice.deleteBook(books);
  }

  editBook(event, books: Books){
    this.editState = true;
    this.bookToEdit = books;
  }

  updateBook(books: Books){
    this.booksSrvice.updateBook(books);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.bookToEdit = null;
  }

}
