import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  init = 'S';
  operacion: string;
  resultado = 0;
  val1 = 0;
  val2 = 0;
  dec = 1;

  obtenerNumero(numero: number){
    if (this.dec !== 1) {
      this.resultado = this.resultado + numero/this.dec;
      this.dec = this.dec*10;
      this.init = 'N';
    } else {
      if (this.init === 'S') {
        this.resultado = numero;
        this.init = 'N';
      } else {
        this.resultado = this.resultado*10 + numero;
      }
    }
  }

  obtenerOperador(operador: string){
    if (this.val1 !== 0) {
      this.val2 = this.resultado;
      this.obtenerResultado();
      this.val2 = 0;
    }
    this.operacion = operador;
    this.init = 'S';
    this.val1 = this.resultado;
    this.dec = 1;
  }

  limpiar(){
    this.resultado = 0;
    this.operacion = '$$';
    this.dec = 1;
    this.val1 = 0;
    this.val2 = 0;
  }

  decimal(){
    if (this.dec === 1) {
      if (this.init === 'S') {
        this.resultado = 0;
      }
      this.dec = 10;
    }
  }

  obtenerResultado(){
    if (this.operacion === '+') {
      this.resultado = this.val1 + this.resultado;
    } else if (this.operacion === '-') {
      this.resultado = this.val1 - this.resultado;
    } else if (this.operacion === '*') {
      this.resultado = this.val1 * this.resultado;
    } else if (this.operacion === '/') {
      this.resultado = this.val1 / this.resultado;
    }
    this.val1 = 0;
    this.val2 = 0;
    this.operacion = '%%';
    this.init = 'S';
    this.dec = 1;
  }
}
