import { Component } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  {path: '/home', title: 'Home', icon: 'home', class: ''},
  {path: '/login', title: 'LogIn', icon: 'login', class: ''},
  {path: '/instructions', title: 'instructions', icon: 'login', class: ''},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}


