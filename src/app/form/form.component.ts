import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  //somar
  onClickSoma(){
    this.resultado = this.num1 + this.num2;
  }
  onClickSubtracao(){
    this.resultado = this.num1 - this.num2;
  }
  onClickDivisao(){
    this.resultado = this.num1 / this.num2;
  }
  onClickMultiplicacao(){
    this.resultado = this.num1 * this.num2;
  }
  onClickPotencia(){
    this.resultado = Math.pow(this.num1, this.num2);
  }
  onClickMedia(){
    this.resultado = (this.num1 + this.num2) / 2;
  }

}
