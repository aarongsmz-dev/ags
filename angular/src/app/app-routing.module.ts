import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//importar componentes
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes =[
  {path: '', component:
AppComponent},
{path: 'alumnos', component:
AlumnosComponent},
{path: 'alumno', component:
AlumnoComponent},
{path: 'profesor', component:
ProfesorComponent},
{path: 'profesores', component:
ProfesoresComponent},
{path: 'curso', component:
CursoComponent},
{path: 'cursos', component:
CursosComponent},


] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
