
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Books } from './../models/books';



@Injectable()
export class BooksService {
  booksCollection: AngularFirestoreCollection<Books>;
  books: Observable<Books[]>;
  bookDoc: AngularFirestoreDocument<Books>;

  constructor(public afs: AngularFirestore) {
   //this.books = this.afs.collection('books').valueChanges();

    this.booksCollection = this.afs.collection('books', ref => ref.orderBy('title', 'asc'));
    
    this.books =  this.booksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Books;
        data.id = a.payload.doc.id;
        return data;
        
      });
    });
  
   }

   getBooks(){
    return this.books;  
  }

  addBooks(books: Books){
    this.booksCollection.add(books);
 }

 deleteBook(books: Books) {
  this.bookDoc = this.afs.doc(`books/${books.id}`);
  this.bookDoc.delete();
 }

 updateBook(books: Books){
  this.bookDoc = this.afs.doc(`books/${books.id}`);
  this.bookDoc.update(books);
 }

}
