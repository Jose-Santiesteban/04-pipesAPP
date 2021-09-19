import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

 //i18nSelect pipe 
nombre : string = 'José';
genero : string = 'm'
invitacionMap = {
  'f':'invitarla',
  'm':'invitarlo'
}
//i18nPlurar pipe
clientes : string [] =['pedro','Ana','Juan','Pablo'];
clientesMapa = {
  '=0':'no tenemos ningun cliente esperando',
  '=1':'tenemos un cliente esperando',
  'other':'tenemos # clientes esperando'
}
 cambiarCliente(){
  this.nombre='Melisa';
  this.genero='f';
  }
 borrarCliente(){
  this.clientes.splice(0,1); 
 }
//keyValue Pipe
persona = {
  nombre: 'Jose',
  edad: 26,
  direccion:'Las Tecas,El Empalme'
}
//json pipe
heroes = [
  {
    nombre: 'superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'aquaman',
    vuela: false
  }
]
}


