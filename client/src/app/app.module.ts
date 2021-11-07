import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTaskModule } from './user-task/user-task.module';

import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    UserTaskModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
