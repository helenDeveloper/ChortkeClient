import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
// import {HttpModule} from "@angular/http";

import {UsersComponent} from "./user/users.component";
import {UserService} from "./user/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserDetailComponent} from "./user/details/user-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {StuffTyypeType} from "./stufftype/stufftype-edit.component";
import {DynamicFormComponent} from "./dynamicforms/dynamicForm.component";
import {DynamicFormQuestionComponent} from "./dynamicforms/dynamic-form-question.component";
import {StuffTypeList} from "./stufftype/list/stufftype-list.component";







@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    StuffTyypeType,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    StuffTypeList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
