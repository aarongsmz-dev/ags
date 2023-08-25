import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioaccesoComponent } from './formularioacceso/formularioacceso.component';
import { FormularioregistroComponent } from './formularioregistro/formularioregistro.component';
import { FormulariocontactoComponent } from './formulariocontacto/formulariocontacto.component';
import { RopaComponent } from './ropa/ropa.component';


const routes: Routes = [
{path:'usuario', component:UsuarioComponent},
{path:'acceso', component:FormularioaccesoComponent},
{path:'registro', component:FormularioregistroComponent},
{path:'contacto', component:FormulariocontactoComponent},
{path:'ropa', component:RopaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
