import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CCustosInterface } from './ICCustos';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CcustoService {

  SERVER_URL = 'https://localhost:7003';
  
  httpOptions= {
    header: new HttpHeaders({
      'Content-Type': 'application/json'  
    })
  };

  constructor(private http: HttpClient) {
   }

   public postCCusto (postData:any): Observable<CCustosInterface>{
    return this.http.post<CCustosInterface>(`${this.SERVER_URL}/custo`, postData).pipe(take(1));
  }

  public getAllCCusto (): Observable<CCustosInterface[]>{
    return this.http.get<CCustosInterface[]>(`${this.SERVER_URL}/custo`);
  }

  public getOneCusto (id:number): Observable<any>{
    return this.http.get<any>(`${this.SERVER_URL}/custo/${id}`);
  }

  public deleteCCusto (id:number):Observable<any>{
    return this.http.delete(`${this.SERVER_URL}/custo/${id}`, {responseType: 'text'});
  }

  public putCCusto (postData:any,id:number):Observable<CCustosInterface>{
    return this.http.put<CCustosInterface>(`${this.SERVER_URL}/custo/${id}`, postData).pipe(take(1));
  }

  // public patchService (postData:any, id:number): Observable<ServicesInterface>{
  //   return this.http.patch<ServicesInterface>(`${this.SERVER_URL}/service/${id}`, postData).pipe(take(1));
  // }
}
