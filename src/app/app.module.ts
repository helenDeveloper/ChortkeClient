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
import {StuffTypeEditComponent} from "./stufftype/stufftype-edit.component";
import {DynamicFormComponent} from "./dynamicforms/dynamicForm.component";
import {DynamicFormQuestionComponent} from "./dynamicforms/dynamic-form-question.component";
import { StuffTypeListComponent} from "./stufftype/list/stufftype-list.component";
import {FactorListComponent} from "./factor/list/factor-list.component";
import {FactorEditComponent} from "./factor/edit/factor-edit.component";
import {DpDatePickerModule} from "ng2-jalali-date-picker";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    StuffTypeEditComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    StuffTypeListComponent,
    FactorListComponent,
    FactorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    DpDatePickerModule



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
