import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesInterface } from './IServices';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AndamentoService {


  SERVER_URL = 'https://localhost:7003';

  httpOptions= {
    header: new HttpHeaders({
      'Content-Type': 'application/json'  
    })
  };

  constructor(private http: HttpClient) { }

  public getAllService ():Observable<ServicesInterface[]>{
    return this.http.get<ServicesInterface[]>(`${this.SERVER_URL}/service`);
  }

  public postService (postData:any): Observable<ServicesInterface>{
    return this.http.post<ServicesInterface>(`${this.SERVER_URL}/service`, postData).pipe(take(1));
  }

  public getOneService (id:number):Observable<ServicesInterface>{
    return this.http.get<ServicesInterface>(`${this.SERVER_URL}/service/${id}`);
  }

  public deleteService (id:number):Observable<ServicesInterface>{
    return this.http.delete<ServicesInterface>(`${this.SERVER_URL}/service/${id}`);
  }

  public patchService (postData:any, id:number): Observable<ServicesInterface>{
    return this.http.patch<ServicesInterface>(`${this.SERVER_URL}/service/${id}`, postData).pipe(take(1));
  }



}

// public postService (postData:ServicesInterface): Observable<ServicesInterface>{
//   return this.http.post<ServicesInterface>(`${this.SERVER_URL}/service/`, postData).pipe(take(1));
// }