import { Component } from '@angular/core';
import { dataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  menuItems?:any[];

  constructor(private servicios:dataService) { 
    this.menuItems=this.servicios.data;
  }
}

