import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'gabrel1.0';

  // name = new FormControl('');

  constructor(){
  }


  ngOnInit(){  } 

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}


// ngOnInit(){
//   this.andamentoService.getAndamento().subscribe((data)=>{
//     this.services= data;
//     console.log(this.services);
//   },
//   (error)=>{
//     console.log(error)
//   });
// } 
      // this.services= this.andamentoService.getAndamento();
      // console.log(this.services.name);
      //   var resultArray = Object.keys(services).map(function(personNamedIndex){
//     let person = services[personNamedIndex];
//     // do something with person
//     return person;
// });
// ngOnInit(){
//   this.andamentoService.getAndamento()
//   .then((carros)=>console.log(carros))
//   .catch((error) => console.log(error))
// } 
// this.andamentoService.getAndamento().subscribe({next : (res) => this.services = res, error: (err) => console.log(err), complete:() => console.log("completou")})