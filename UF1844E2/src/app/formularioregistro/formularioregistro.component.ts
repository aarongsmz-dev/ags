import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBuilderBD } from '../modelos/formulario'; 
@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {
  public nombref: string
  public passf: string


constructor(){
  this.nombref = ""
  this.passf= ""
}


ngOnInit(){
  console.log("OnInit ejecutado")
}

submitForm(){
  console.log('Formulario enviado')
}
}


