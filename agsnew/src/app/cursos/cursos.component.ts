import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public nombre: string
  public listado: string

  constructor(){
    this.nombre ="Programación"
    this.listado="Listado de Cursos"
  }
  cambiarTitulo(){
    this.nombre="Programación en Angular"
}
}



