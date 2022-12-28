import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoModule } from './cuerpo/cuerpo.module';
import { ModuloComponent } from './modulo/modulo.component';


@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CuerpoModule,
    // ModuloModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
