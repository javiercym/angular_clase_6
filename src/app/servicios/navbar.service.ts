import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class navbarService {
    menu:any[]=[{
      titulo:'inicio',
      url:'inicio',
      icono:'nav-icon fas fa-tachometer-alt'
    },
    {
      titulo:'nosotros',
      url:'nosotros',
      icono:'nav-icon fas fa-shopping-cart',
    },
    {
        titulo:'servicios',
        url:'servicios',
        icono:'nav-icon fas fa-shopping-cart',
    },
    {
        titulo:'contactanos',
        url:'contactanos',
        icono:'nav-icon fas fa-shopping-cart',
    },
  ]
} 