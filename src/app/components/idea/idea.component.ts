import { IdeaService } from './../../services/idea.service';
import { Idea } from './../../models/idea';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  ideas: Idea[];
  editState: boolean = false;
  ideaToEdit: Idea;

  constructor(private ideaService: IdeaService) {

   }

  ngOnInit() {
    this.ideaService.getIdea().subscribe(ideas => {
      this.ideas = ideas;
    })
  }

  deleteIdea(event, ideas: Idea) {
    this.clearState();
    this.ideaService.deleteIdea(ideas);
  }

  editIdea(event, ideas: Idea){
    this.editState = true;
    this.ideaToEdit = ideas;
  }

  updateIdea(ideas: Idea){
    this.ideaService.updateIdea(ideas);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.ideaToEdit = null;
  }

}
