import { Component, OnInit } from '@angular/core';
import { usuarioBD } from '../modelos/usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  public usuarioAll: Array<usuarioBD>

  constructor(){
    this.usuarioAll =[
      new usuarioBD("Aarón", "González", 27, "aags@gmail.com",67895423 ,),
      
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.usuarioAll)
  }
}


