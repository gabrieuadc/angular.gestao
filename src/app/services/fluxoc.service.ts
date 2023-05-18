import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { FluxoInterface } from './IFluxos';

@Injectable({
  providedIn: 'root'
})
export class FluxocService {

  SERVER_URL = 'http://localhost:8080';

  httpOptions= {
    header: new HttpHeaders({
      'Content-Type': 'application/json'  
    })
  };
  

  constructor(private http:HttpClient) {
   }

   public postFluxo(postData:any): Observable<FluxoInterface>{
    return this.http.post<FluxoInterface>(`${this.SERVER_URL}/fluxoCaixa`, postData).pipe(take(1));
   }

   public getAllFluxo(): Observable<any>{
    return this.http.get(`${this.SERVER_URL}/fluxoCaixa`);
   }

}
