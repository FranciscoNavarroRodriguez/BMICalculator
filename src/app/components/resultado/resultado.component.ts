import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit{

  valorIBM: number
  resultado: string = ''
  interpretacion: string = ''

  constructor(public _route: ActivatedRoute){
    this.valorIBM = +this._route.snapshot.paramMap.get('valor')!
  }


  ngOnInit(): void {
    this.getResultados()    
  }

  getResultados(){
    if(this.valorIBM >=25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer mas ejercicio'
    } else if(this.valorIBM >= 18.5){
      this.resultado = 'Normal'
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!'
    } else {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas'
    }
  }



}
