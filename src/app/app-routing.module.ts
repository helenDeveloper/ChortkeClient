import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./user/users.component";

const routes: Routes =[{path:'test', component:UsersComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,exports :[RouterModule]})
export class  AppRoutingModule
{}
