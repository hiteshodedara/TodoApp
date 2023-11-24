import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosComponent } from './components/todos/todos.component';
import { TodoitemsComponent } from './components/todoitems/todoitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistsComponent } from './components/todolists/todolists.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PopupModelComponent } from './components/popup-model/popup-model.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemsComponent,
    TodolistsComponent,
    PopupModelComponent,
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
    ToastModule,
    DropdownModule,
    MultiSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
