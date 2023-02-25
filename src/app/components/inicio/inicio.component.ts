import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  peso: number = 70;
  edad: number = 20;
  altura: number = 170
  sexo: string = 'masculino'

  constructor(private _router: Router){}


  cambiarAltura(evento: any): void{
    this.altura = evento.target.value
  }

  seleccionarSexo(sexo: string){
    this.sexo = sexo
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100, 2)
    console.log(BMI.toFixed(1))
    this._router.navigate(['/resultado', BMI.toFixed(1)])
  }
}
