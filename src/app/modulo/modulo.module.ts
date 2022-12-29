import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CuerpoModule } from '../cuerpo/cuerpo.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    CuerpoModule,
    RouterModule
  ]
})
export class ModuloModule { }
