import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {HttpModule} from "@angular/http";
import {HeroService} from "./hero.service";
import {UsersComponent} from "./user/users.component";
import {UserService} from "./user/user.service";
import {FormsModule} from "@angular/forms";
import {UserDetailComponent} from "./user/details/user-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { MdButtonModu, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
// import {HttpModu} from "@angular/common/http";






@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [HeroService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
