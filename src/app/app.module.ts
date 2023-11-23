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
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTodoServiceComponent } from './components/update-todo-service/update-todo-service.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    TodoaddComponent,
    TodosComponent,
    TodoitemsComponent,
    TodolistsComponent,
    UpdateTodoServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
