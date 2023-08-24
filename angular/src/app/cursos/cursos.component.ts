import { Component, OnInit } from '@angular/core';
import { cursosBD } from '../modelos/curso';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public cursosAll: Array<cursosBD>

  constructor(){
    this.cursosAll =[
      new cursosBD("HTML", 10, "Manuel"),
      new cursosBD("CSS", 80, "Manuel"),
      new cursosBD("Vida", 100, "Manolo"),
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.cursosAll)
  }
}
