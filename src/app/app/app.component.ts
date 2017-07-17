import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'my-app-root',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
    
    <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>

  `
})
  // <my-app></my-app>
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}
