import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {HeroService} from "./hero.service";
import {UsersComponent} from "./user/users.component";
import {UserService} from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HeroService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
