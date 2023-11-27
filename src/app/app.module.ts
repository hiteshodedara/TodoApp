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
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { DropdownstyleComponent } from './test/dropdownstyle/dropdownstyle.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemsComponent,
    TodolistsComponent,
    PopupModelComponent,
    DropdownstyleComponent,
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
    DropdownModule,
    MultiSelectModule,
    ButtonModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
