import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public curso: string
  public texto: string

  constructor(){
    this.curso ="Curso HTML"
    this.texto="lorem ipsu"
  }
  cambiarCurso(){
    this.curso="Curso CSS" 
}
}
