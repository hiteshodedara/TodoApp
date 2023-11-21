import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoaddComponent } from './components/todoadd/todoadd.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoitemsComponent } from './components/todoitems/todoitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistsComponent } from './components/todolists/todolists.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoaddComponent,
    TodosComponent,
    TodoitemsComponent,
    TodolistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
