import { Component } from '@angular/core';
import { ImpService } from 'src/app/services/imp.service';

export interface IImp {
  rbruta: number;
  pis: number;
  cofins: number;
  exercicio: string;
}

@Component({
  selector: 'app-gestao-fluxo',
  templateUrl: './gestao-fluxo.component.html',
  styleUrls: ['./gestao-fluxo.component.css']
})
export class GestaoFluxoComponent {
  displayedColumns: string[] = ['name', 'contact', 'service', 'value', 'date'];

  public rbruta!:number;
  public pis!:number;
  public cofins!:number;
  public exercicio!:string;

  imp!:IImp;

  constructor(private impservice:ImpService){

  }

  apuracao() {
    this.pis= this.rbruta *0.0065;    
    this.cofins= this.rbruta * 0.003;

    this.imp={
      rbruta: this.rbruta,pis:this.pis, cofins:this.cofins,exercicio:this.exercicio,
    }
    console.log(this.imp);
  }

  postImp(){
    this.impservice.postImp(this.imp).subscribe((res)=>{alert("Cadastrado com sucesso")});
  }

}
