import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {HeroService} from "./hero.service";
import {UsersComponent} from "./user/users.component";
import {UserService} from "./user/user.service";
import {FormsModule} from "@angular/forms";
import {UserDetailComponent} from "./user/details/user-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
