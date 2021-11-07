import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-availablity',
  templateUrl: './user-availablity.component.html',
  styleUrls: ['./user-availablity.component.css']
})
export class UserAvailablityComponent implements OnInit {
  users = ["Enabled", "Disabled"];
  terms: boolean = false;
  Name: string = '';
  constructor() { }

  ngOnInit(): void {

  }

}
