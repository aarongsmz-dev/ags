import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { ComponentComponent } from './component/component.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAcessoComponent } from './formulario-acesso/formulario-acesso.component';
import { FormulariodeRegistroComponent } from './formulariode-registro/formulariode-registro.component';
import { FormulariodeConsultaComponent } from './formulariode-consulta/formulariode-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ComponentComponent,
    CursosComponent,
    CursoComponent,
    AlumnoComponent,
    AlumnosComponent,
    ProfesoresComponent,
    ProfesorComponent,
    FormularioAcessoComponent,
    FormulariodeRegistroComponent,
    FormulariodeConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
