import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "./app.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserModelComponent} from "./user-model/user-model.component";

const routes: Routes = [

  // {path: '',component: AppComponent}, //, pathMatch: 'full'},
  {path: 'home', redirectTo: '/'},
  {path: 'add_user', component: UserAddComponent},
  {path: 'show_all_users', component: UserModelComponent},
  // {path:'**',component: UserModelComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{   enableTracing: true })],
   exports: [RouterModule]
})
export class AppRoutingUserModule {
}
