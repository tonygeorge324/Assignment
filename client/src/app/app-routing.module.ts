import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAvailComponent } from './user-task/task-avail/task-avail.component';


import { UserAvailablityComponent } from './users/user-availablity/user-availablity.component';

const routes: Routes = [
  { path: 'task', component: TaskAvailComponent },
  { path: 'user', component: UserAvailablityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
