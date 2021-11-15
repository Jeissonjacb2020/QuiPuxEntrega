import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'DASHBOARD',  icon: 'dashboard'},
    { path: '/icons', title: 'EMPRESAS',  icon:'bubble_chart'},
    { path: '/notifications', title: 'ARTICULOS',  icon:'notifications'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 2000) {
          return true;
      }
      return true;
  };
}
