import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'jose';
  nombreUpper: string = 'jose';
  nombreCompleto: string = 'jose santiesteban';
  fecha: Date = new Date();
  customFormat='y/MMMM/dd';
  constructor() { }

  ngOnInit(): void {
  }

}
