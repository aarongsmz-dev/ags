import { Component, OnInit } from '@angular/core';
import { cursoBD } from '../modelos/curso';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public cursoAll: Array<cursoBD>

  constructor(){
    this.cursoAll =[
      new cursoBD("HTML", 10, "Manuel"),
      new cursoBD("CSS", 80, "Manuel"),
      new cursoBD("Vida", 100, "Manolo"),
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.cursoAll)
  }
}
