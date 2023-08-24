import { Component, OnInit } from '@angular/core';
import { alumnoBD } from '../modelos/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  public alumnoAll: Array<alumnoBD>

  constructor(){
    this.alumnoAll =[
      new alumnoBD("Aarón", "González", 27, "aags@gmail.com",67895423 ,"url"),
      new alumnoBD("Kevin", "Armas", 574, "kev@gmail.com", 369852147, "url/"),
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.alumnoAll)
  }
}
