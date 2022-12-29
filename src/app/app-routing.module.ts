import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoModule } from './cuerpo/cuerpo.module';
import { ModuloRoutingModule } from './modulo/modulo-routing.module';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloModule } from './modulo/modulo.module';

const routes: Routes = [
  {path:'**',component:ModuloComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ModuloModule,
    ModuloRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
