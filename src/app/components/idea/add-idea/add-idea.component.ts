import { Idea } from './../../../models/idea';
import { IdeaService } from './../../../services/idea.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {
  ideas: Idea = {
  title: '',
  description: ''
  }

  constructor(private ideaService: IdeaService) { }
  
    ngOnInit() {
    }
    
    onSubmit(){
      if(this.ideas.title != '' && this.ideas.description != ''){
        this.ideaService.addIdea(this.ideas);
        this.ideas.title = '';
        this.ideas.description = '';
      }
    }


}
