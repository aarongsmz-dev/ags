import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioaccesoComponent } from './formularioacceso/formularioacceso.component';
import { FormularioregistroComponent } from './formularioregistro/formularioregistro.component';
import { FormulariocontactoComponent } from './formulariocontacto/formulariocontacto.component';
import { RopaComponent } from './ropa/ropa.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TallaComponent } from './talla/talla.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormularioaccesoComponent,
    FormularioregistroComponent,
    FormulariocontactoComponent,
    RopaComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TallaComponent,
    GestionServiciosComponent,
    ListaServiciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
