
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Todo } from './../models/todo';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService {
  todoCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  todoDoc: AngularFirestoreDocument<Todo>;


  constructor(public afs: AngularFirestore) {
    //this.todos = this.afs.collection('todo').valueChanges();

    this.todoCollection = this.afs.collection('todo', ref => ref.orderBy('title', 'asc'));


    this.todos =  this.todoCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Todo;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }
  
   getTodo(){
     return this.todos;  
   }

   addTodo(todo: Todo){
      this.todoCollection.add(todo);
   }

   deleteTodo(todo: Todo) {
    this.todoDoc = this.afs.doc(`todo/${todo.id}`);
    this.todoDoc.delete();
   }

   updateTask(todo: Todo){
    this.todoDoc = this.afs.doc(`todo/${todo.id}`);
    this.todoDoc.update(todo);
   }
}
