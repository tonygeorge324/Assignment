import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvailablityComponent } from './user-availablity/user-availablity.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [

  
    UserAvailablityComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserAvailablityComponent
  ]
})
export class UsersModule { }
