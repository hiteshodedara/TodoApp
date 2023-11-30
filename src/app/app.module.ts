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
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AuthorizedViewComponent } from './layouts/authorized-view/authorized-view.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BoardMenuBarComponent } from './components/board-menu-bar/board-menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemsComponent,
    TodolistsComponent,
    PopupModelComponent,
    MenuBarComponent,
    AuthorizedViewComponent,
    SideBarComponent,
    BoardMenuBarComponent,
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
    ToastModule,
    TooltipModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    MenuModule,
    TieredMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
