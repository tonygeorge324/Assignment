import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAvailComponent } from './task-avail/task-avail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskAvailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserTaskModule { }
