import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class navbarService {
    menu:any[]=[{
      titulo:'inicio',
      url:'/dashboard/inicio'
    },
    {
      titulo:'nosotros',
      url:'/dashboard/nosotros'
    },
    {
        titulo:'servicios',
        url:'/dashboard/servicios'
    },
    {
        titulo:'contactanos',
        url:'/dashboard/contactanos'
    },
  ]
} 