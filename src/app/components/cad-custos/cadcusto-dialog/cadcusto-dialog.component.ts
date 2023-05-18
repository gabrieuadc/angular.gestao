import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CCustosInterface } from 'src/app/services/ICCustos';
import { CcustoService } from 'src/app/services/ccusto.service';

@Component({
  selector: 'app-cadcusto-dialog',
  templateUrl: './cadcusto-dialog.component.html',
  styleUrls: ['./cadcusto-dialog.component.css']
})
export class CadcustoDialogComponent implements OnInit{
  public cadCustos!: FormGroup;

  displayedColumns: string[] = ['Ccusto', 'mod', 'md', 'cif', 'cpp', 'actions'];
  custos!: CCustosInterface[];


  constructor(private ccustoService:CcustoService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.cadCustos= this.fb.group({
      cc: ['', [Validators.required]],
      mod: [, [Validators.required]],
      md: [, [Validators.required]],
      cif: [, [Validators.required]],
      cpp: [, [Validators.required]],
      exercicio: [, [Validators.required]],
    });
    // this.cadCustos.disable();

      this.ccustoService.getAllCCusto().subscribe({next: (res) => this.custos = res, error: (err) => console.log(err), complete:() =>{}})
      // this.ccustoService.getOneCusto(this.numObj).subscribe({next:(res)=> this.cadCustos.setValue(this.custos1= res),error:(error)=> console.log(error), complete:()=>{}})
      // this.cadCustos.setValue(this.custos1);

      
    
  }

  postCcusto() {
    // if(this.disableBtnEdit==true){
    //   console.log(this.cadCustos.value.id);
      this.ccustoService.postCCusto(this.cadCustos.value).subscribe((res)=>{alert("Gravado com sucesso"); window.location.reload()});
    // }
    // else{
    //   console.log("erro");
    // }
  }
}
