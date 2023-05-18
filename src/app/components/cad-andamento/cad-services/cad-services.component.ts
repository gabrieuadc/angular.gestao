import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AndamentoService } from 'src/app/services/andamento.service';
import { ServicesInterface } from 'src/app/services/IServices';

@Component({
  selector: 'app-cad-services',
  templateUrl: './cad-services.component.html',
  styleUrls: ['./cad-services.component.css']
})
export class CadServicesComponent implements OnInit{

  public cadServicos!: FormGroup;


  constructor(private fb: FormBuilder, private andamentoService: AndamentoService){
  }

  ngOnInit(): void {
    this.cadServicos= this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      service: ['', [Validators.required]],
      value: [, [Validators.required]],
      date: [, [Validators.required]],
    });
  }



  poster() {
    // console.log(JSON.stringify(this.cadServicos.value));
    this.andamentoService.postService(this.cadServicos.value).subscribe((res)=>{alert("Cadastrado com sucesso")});
  }


}
