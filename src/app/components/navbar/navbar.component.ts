import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function(){
    //   $('.sidenav').sidenav();
    //   $('#sidenav-1').sidenav({ edge: 'left' });
      
    // });
    
  }

}
