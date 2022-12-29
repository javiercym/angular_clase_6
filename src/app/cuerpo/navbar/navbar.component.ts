import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navbarService } from 'src/app/servicios/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems?:any[];

  constructor(private navbar:navbarService, private router:Router) { 
    this.menuItems=this.navbar.menu;
    console.log(this.navbar.menu)
  }
}
