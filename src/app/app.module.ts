import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { WelcomComponent } from './welcom/welcom.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
