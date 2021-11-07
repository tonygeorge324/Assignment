import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private router: Router) { }
  btnClick1 = () => {
    this.router.navigateByUrl('/user');
  }
  btnClick2 = () => {
    this.router.navigateByUrl('/task');
  }
}
