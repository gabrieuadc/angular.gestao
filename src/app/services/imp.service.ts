import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IImpInterface } from './IImp';

@Injectable({
  providedIn: 'root'
})
export class ImpService {

  SERVER_URL = 'https://localhost:7003';

  // httpOptions= {
  //   header: new HttpHeaders({
  //     'Content-Type': 'application/json'  
  //   })
  // };

  constructor(private http: HttpClient) { 
  }

  public postImp(postData:any):Observable<IImpInterface>{
    return this.http.post<IImpInterface>(`${this.SERVER_URL}/api/Impostos`, postData).pipe(take(1));
  }

  public getAllImp():Observable <IImpInterface[]>{
    return this.http.get<IImpInterface[]>(`${this.SERVER_URL}/api/Impostos`);
  }

}
