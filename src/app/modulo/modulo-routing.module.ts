
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModuloComponent } from './modulo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [

  {path:'dashboard',component:ModuloComponent,
    children:[
      {path:'inicio',component:InicioComponent},
      {path:'nosotros',component:NosotrosComponent},
      {path:'servicios',component:ServiciosComponent},
      {path:'contactanos',component:ContactanosComponent},
      {path:'**',redirectTo:'inicio'}
    ]
  },
  {
    path:'**',redirectTo:'dashboard'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }
