import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserModelComponent } from './user-model/user-model.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserAddComponent } from './user-add/user-add.component';
import { AppRoutingUserModule } from './/app-routing-user.module';


@NgModule({
  declarations: [
    AppComponent,
    UserModelComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
