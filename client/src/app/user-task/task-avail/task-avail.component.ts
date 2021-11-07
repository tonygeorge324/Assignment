import { Component, OnInit } from '@angular/core';
export class User {
  id: number;
  name: string;
  powerLimit: number;
  minSetpoint: number;
  maxSetpoint: number;
  enabled: boolean
}
const USERS: User[] = [
  { id: 1, name: 'Asset 1', powerLimit: 100, minSetpoint: -50, maxSetpoint: 50, enabled: true },
  { id: 2, name: 'Asset 2', powerLimit: 50, minSetpoint: 0, maxSetpoint: 50, enabled: false },
  { id: 3, name: 'Asset 3', powerLimit: 500, minSetpoint: -100, maxSetpoint: 400, enabled: false }
]
@Component({
  selector: 'app-task-avail',
  templateUrl: './task-avail.component.html',
  styleUrls: ['./task-avail.component.css']
})
export class TaskAvailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = USERS;
  selectedUser: User;
  onselect(user: User) {
    this.selectedUser = user;

  }
}
