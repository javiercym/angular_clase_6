import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class navbarService {
    menu:any[]=[{
      titulo:'inicio',
      url:'/dashboard/inicio',
      icono:'nav-icon fas fa-tachometer-alt'
    },
    {
      titulo:'nosotros',
      url:'/dashboard/nosotros',
      icono:'nav-icon fas fa-shopping-cart',
    },
    {
        titulo:'servicios',
        url:'/dashboard/servicios',
        icono:'nav-icon fas fa-shopping-cart',
    },
    {
        titulo:'contactanos',
        url:'/dashboard/contactanos',
        icono:'nav-icon fas fa-shopping-cart',
    },
  ]
} 