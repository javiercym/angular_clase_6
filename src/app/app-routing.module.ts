import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modulo/inicio/inicio.component';
import { ModuloRoutingModule } from './modulo/modulo-routing.module';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloModule } from './modulo/modulo.module';

const routes: Routes = [
  {path:'**',component:ModuloComponent}
  // {path:'**',component:InicioComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ModuloRoutingModule,
    ModuloModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
