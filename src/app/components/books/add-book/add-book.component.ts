import { BooksService } from './../../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../../../models/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

    books: Books = {
    author: '',
    title: '',
    genre: ''
  }

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    if(this.books.author != '' && this.books.title != '' && this.books.genre != ''){
      this.booksService.addBooks(this.books);
      this.books.author = '';
      this.books.title = '';
      this.books.genre = '';
    }
  }

}
