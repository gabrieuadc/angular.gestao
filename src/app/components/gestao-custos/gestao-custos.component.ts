import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CCustosInterface } from 'src/app/services/ICCustos';
import { CcustoService } from 'src/app/services/ccusto.service';
import { FluxocService } from 'src/app/services/fluxoc.service';


export interface fluxocaixaa {
  clientes: number;
  fornecedores: number;
  despesas: number;
  caixaop: number;
  cativo: number;
  recdiv: number;
  caixainv: number;
  pgfinan: number;
  intcapital: number;
  caixafinan: number;
  saldodisponibilidade: number;
  exercicio: string;
}

const ELEMENT_DATA = [
  {position: 1},
  {position: 2},
  {position: 3},
  {position: 4},
  {position: 5},
  {position: 6},
  {position: 7},
  {position: 8},
  {position: 9},
  {position: 10},
];


@Component({
  selector: 'app-gestao-custos',
  templateUrl: './gestao-custos.component.html',
  styleUrls: ['./gestao-custos.component.css']
})
export class GestaoCustosComponent implements OnInit{
  public cadFluxo!:FormGroup;
  displayedColumns: string[] = ['Fluxo'];

  costTotal!:number;
  numObj!:number;
  custos!: CCustosInterface[];

  fluxo2!: fluxocaixaa;

  fluxoreceb!: fluxocaixaa[];

  dataSource = ELEMENT_DATA;
  

  public clientes!:number;
  public fornecedores!:number;
  public despesas!:number;
  public caixaop!:number;
  public cativo!:number;
  public recdiv!:number;
  public caixainv!:number;
  public pgfinan!:number;
  public intcapital!:number;
  public caixafinan!:number;
  public saldodisponibilidade!:number;
  public exercicio!:string;
  public users!:[{teste:string, teste2:string}];


  constructor(private fluxoService:FluxocService){

  }


  apuracao() {
    this.caixaop= this.clientes- this.fornecedores- this.despesas;    
    this.caixainv= this.recdiv- this.cativo ;   
    this.caixafinan= this.intcapital- this.pgfinan;
    this.saldodisponibilidade= this.caixaop + this.caixainv + this.caixafinan;

    this.fluxo2={
      clientes: this.clientes, fornecedores: this.fornecedores, despesas: this.despesas,
      caixaop: this.caixaop, cativo: this.cativo, recdiv: this.recdiv, caixainv: this.caixainv, pgfinan: this.pgfinan, intcapital: this.intcapital, 
      caixafinan: this.caixafinan, saldodisponibilidade: this.saldodisponibilidade, exercicio: this.exercicio,
    }
    console.log(this.fluxo2);
  }

  postFluxo() {
    // console.log(JSON.stringify(this.cadServicos.value));
    this.fluxoService.postFluxo(this.fluxo2).subscribe((res)=>{alert("Cadastrado com sucesso")});
  }



  
  // teste2(){
  //   var teste1:any= new teste();
  //   console.log(teste1);
  // }


  ngOnInit():void{
    this.fluxoService.getAllFluxo().subscribe({next: (res)=> this.fluxoreceb = res, error:(error)=> console.log(error), complete:()=>{} })
    this.users=[{teste:"noia",teste2:"noinha"}];
    // this.cadFluxo= this.fb.group({
    //   clientes:[,[Validators.required]],
    //   fornecedores: [,[Validators.required]],
    //   despesas:[,[Validators.required]],
    //   caixaop:[,[Validators.required]],
    //   recdiv:[,[Validators.required]],
    //   cativo:[,[Validators.required]],
    //   caixainv:[,[Validators.required]],
    //   intcapital:[,[Validators.required]],
    //   pagfinan:[,[Validators.required]],
    //   caixafinan:[,[Validators.required]],
    //   exercicio:[,[Validators.required]],
    // });
  }

}

// this.andamentoService.getAllService().subscribe({next : (res) => this.services = res, error: (err) => console.log(err), complete:() => {}});
    //   // this.clientes;
    // // this.fornecedores;
    // // this.despesas;
    // this.caixaop= this.clientes- this.fornecedores- this.despesas;    
    // // this.cativo;
    // // this.recdiv;
    // this.caixainv= this.caixaop+ this.recdiv- this.cativo ;   
    // // this.pgfinan;
    // // this.intcapital; 
    // this.caixafinan= this.caixainv+ this.intcapital- this.pgfinan;
    // // this.exercicio;
// const ELEMENT_DATA = [
//   {mod: 1, cc: 'Geral', md: 1.0079, cif: 1, cpp:10},
//   {mod: 2, cc: 'Geral', md: 4.0026, cif: 2, cpp:10},
//   {mod: 3, cc: 'Geral', md: 6.941, cif: 3, cpp:10},
//   {mod: 4, cc: 'Geral', md: 9.0122, cif: 5, cpp:10},
//   {mod: 5, cc: 'Geral', md: 10.811, cif: 6, cpp:10},
//   {mod: 6, cc: 'Geral', md: 12.0107, cif: 7, cpp:10},
//   {mod: 7, cc: 'Geral', md: 14.0067, cif: 8, cpp:10},
//   {mod: 8, cc: 'Geral', md: 15.9994, cif: 9, cpp:10},
//   {mod: 9, cc: 'Geral', md: 18.9984, cif: 10, cpp:10},
//   {mod: 10, cc: 'Geral', md: 20.1797, cif: 12, cpp:10},
// ];
  // dataSource = ELEMENT_DATA;