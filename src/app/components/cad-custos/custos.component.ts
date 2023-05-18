import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CCustosInterface } from 'src/app/services/ICCustos';
import { CcustoService } from 'src/app/services/ccusto.service';
import { EditcustoDialogComponent } from './editcusto-dialog/editcusto-dialog.component';
import { CadcustoDialogComponent } from './cadcusto-dialog/cadcusto-dialog.component';





@Component({
  selector: 'app-custos',
  templateUrl: './custos.component.html',
  styleUrls: ['./custos.component.css']
})

export class CustosComponent implements OnInit{
  public cadCustos!: FormGroup;

  displayedColumns: string[] = ['Ccusto', 'mod', 'md', 'cif', 'cpp', 'exercicio','actions'];
  // dataSource = ELEMENT_DATA;
  // custos!: CCustosInterface[];


  custos!: CCustosInterface[];
  custos1!: CCustosInterface;



  idcustos!:String;
  costTotal!:number;
  numObj:number=1;    
  dataSource = this.custos;

  buttonNew="Novo"
  buttonEdit="Editar"

  disableBtnEdit=false;
  disableBtnNew=false;

  disablee=true;

  public cpp1!:number;

  

  constructor(private fb: FormBuilder, private ccustoService: CcustoService, public dialog: MatDialog){
    
  }

  ngOnInit(): void {    
    this.cadCustos= this.fb.group({
      id: [''],
      cc: ['', [Validators.required]],
      mod: [, [Validators.required]],
      md: [, [Validators.required]],
      cif: [, [Validators.required]],
      cpp: [, [Validators.required]],
      exercicio: [, [Validators.required]],
    });
    this.cadCustos.disable();

      this.ccustoService.getAllCCusto().subscribe({next: (res) => this.custos = res, error: (err) => console.log(err), complete:() =>{}})
      this.ccustoService.getOneCusto(this.numObj).subscribe({next:(res)=> this.cadCustos.setValue(this.custos1= res),error:(error)=> console.log(error), complete:()=>{}})
      // this.cadCustos.setValue(this.custos1);

      
  }


  openDialog() {
    const dialogRef = this.dialog.open(CadcustoDialogComponent, {
      height: '800px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(EditcustoDialogComponent, {
      height: '800px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
// }
  postCcusto() {
    // if(this.disableBtnEdit==true){
    //   console.log(this.cadCustos.value.id);
      this.ccustoService.putCCusto(this.cadCustos.value, 4).subscribe((res)=>{alert("Alterado com sucesso"); window.location.reload()});
    // }
    // else{
    //   console.log("erro");
    // }
  }

  deleteCCusto(id:number) {
    this.ccustoService.deleteCCusto(id).subscribe((res)=>{alert("Deletado com sucesso"); window.location.reload()});
  }

  resetForm(){
    this.cadCustos.enable();
    this.cadCustos.reset();

    if(this.buttonNew =='Novo'){
      this.buttonNew="Cancelar";
      this.disableBtnEdit=true;
    }
    else{
      this.buttonNew='Novo';
      this.cadCustos.disable();
      this.disableBtnEdit=false;
    }

  }

  incrementID(){
    this.numObj++;
    this.ccustoService.getOneCusto(this.numObj).subscribe({next:(res)=> this.cadCustos.setValue(this.custos1= res),error:(error)=> console.log(error), complete:()=>{}})
  }

  decrementID(){
    this.numObj--;
    this.ccustoService.getOneCusto(this.numObj).subscribe({next:(res)=> this.cadCustos.setValue(this.custos1= res),error:(error)=> console.log(error), complete:()=>{}})
  }

  editForm(){
    this.cadCustos.enable();

    if(this.buttonEdit =='Editar'){
      this.buttonEdit="Cancelar";
      this.disableBtnNew=true;
    }
    else{
      this.buttonEdit='Editar';
      this.cadCustos.disable();
      this.disableBtnNew=false;
    }

  }

  


}
