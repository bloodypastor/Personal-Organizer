
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TodoService } from './services/todo.service';
import { BooksService } from './services/books.service';
import { IdeaService } from './services/idea.service';





import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { BooksComponent } from './components/books/books.component';
import { IdeaComponent } from './components/idea/idea.component';
import { RegisterComponent } from './components/register/register.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { AddIdeaComponent } from './components/idea/add-idea/add-idea.component';

const appRoutes: Routes = [
  {path: '', component:NavbarComponent},
  {path: 'todo', component:TodoComponent},
  {path: 'books', component:BooksComponent},
  {path: 'idea', component:IdeaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TodoComponent,
    BooksComponent,
    IdeaComponent,
    RegisterComponent,
    AddTodoComponent,
    AddBookComponent,
    AddIdeaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    BooksService,
    IdeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
