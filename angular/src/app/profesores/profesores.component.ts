import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../modelos/profesor';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
public profesoresAll: Array<profesoresBD>

  constructor(){
    this.profesoresAll =[
      new profesoresBD("Manuel", "Macias", "Mm@gmail.com", "CSS"),
      new profesoresBD("Manolo", "Quiroz", "Mq@gmail.com", "Vida"),
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.profesoresAll)
  }
}
