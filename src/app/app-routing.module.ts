import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./user/users.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StuffTyypeType} from "./stufftype/stufftype-edit.component";

const routes: Routes =[{path:'',redirectTo: '/dashboard', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'stufftype', component:StuffTyypeType}];


@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,exports :[RouterModule]})
export class  AppRoutingModule
{}
