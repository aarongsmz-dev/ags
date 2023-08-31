import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioaccesoComponent } from './formularioacceso/formularioacceso.component';
import { FormularioregistroComponent } from './formularioregistro/formularioregistro.component';
import { FormulariocontactoComponent } from './formulariocontacto/formulariocontacto.component';
import { RopaComponent } from './ropa/ropa.component'; 
import { BodyComponent } from './body/body.component';
import { TallaComponent } from './talla/talla.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

const routes: Routes = [
{path:'usuario', component:UsuarioComponent},
{path:'acceso', component:FormularioaccesoComponent},
{path:'registro', component:FormularioregistroComponent},
{path:'contacto', component:FormulariocontactoComponent},
{path:'ropa', component:RopaComponent},
{path:'body',component:BodyComponent},
{path:'talla',component:TallaComponent},
{path:'lista',component:ListaServiciosComponent,
children:[{path:'gestion',component:GestionServiciosComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
