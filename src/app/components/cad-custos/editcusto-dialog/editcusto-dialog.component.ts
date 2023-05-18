import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CcustoService } from 'src/app/services/ccusto.service';

@Component({
  selector: 'app-editcusto-dialog',
  templateUrl: './editcusto-dialog.component.html',
  styleUrls: ['./editcusto-dialog.component.css']
})
export class EditcustoDialogComponent implements OnInit {

  constructor(private fb1: FormBuilder, private ccustoService: CcustoService){}
  public cadCustos1!: FormGroup;

  ngOnInit(): void {
    this.cadCustos1= this.fb1.group({
      id: [''],
      cc: ['', [Validators.required]],
      mod: [, [Validators.required]],
      md: [, [Validators.required]],
      cif: [, [Validators.required]],
      cpp: [, [Validators.required]],
      exercicio: [, [Validators.required]],
    });

    this.ccustoService.getOneCusto(4).subscribe({next:(res)=> this.cadCustos1.setValue(this.cadCustos1= res),error:(error)=> console.log(error), complete:()=>{}})

  }

}
