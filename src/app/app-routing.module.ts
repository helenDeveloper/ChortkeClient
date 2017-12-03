import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./user/users.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import {StuffTypeListComponent} from "./stufftype/list/stufftype-list.component";
import {FactorListComponent} from "./factor/list/factor-list.component";

const routes: Routes =[{path:'',redirectTo: '/dashboard', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'stufftype', component:StuffTypeListComponent},
  {path:'factors', component:FactorListComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,exports :[RouterModule]})
export class  AppRoutingModule
{}
