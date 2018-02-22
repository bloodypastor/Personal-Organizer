import { Idea } from './../models/idea';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IdeaService {
  ideaCollection: AngularFirestoreCollection<Idea>;
  ideas: Observable<Idea[]>;
  ideaDoc: AngularFirestoreDocument<Idea>;


  constructor( public afs: AngularFirestore) {
    //this.ideas = this.afs.collection('idea').valueChanges();

    this.ideaCollection = this.afs.collection('idea', ref => ref.orderBy('title', 'asc'));

    this.ideas =  this.ideaCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Idea;
        data.id = a.payload.doc.id;
        return data;
        
      });
    });
   }

   getIdea(){
     return this.ideas;
   }

   addIdea(ideas: Idea){
    this.ideaCollection.add(ideas);
 }

 deleteIdea(ideas: Idea) {
  this.ideaDoc = this.afs.doc(`idea/${ideas.id}`);
  this.ideaDoc.delete();
 }

 updateIdea(ideas: Idea){
  this.ideaDoc = this.afs.doc(`idea/${ideas.id}`);
  this.ideaDoc.update(ideas);
 }

}
