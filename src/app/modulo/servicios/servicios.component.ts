import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  menuItems?:any[];

  constructor(private navbar:dataService, private router:Router) { 
    this.menuItems=this.navbar.menu;
    console.log(this.navbar.menu)
  }
}

