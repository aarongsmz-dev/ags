import { Component , OnInit} from '@angular/core';
import { alumnosBD } from '../modelos/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
public alumnosAll: Array<alumnosBD>

  constructor(){
    this.alumnosAll=[
      new alumnosBD("Aarón", "González", 27, "aags@gmail.com",67895423, true),
      new alumnosBD("Kevin", "Armas", 574, "kev@gmail.com", 369852147, false),

    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.alumnosAll)
  }
}

