import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {

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
