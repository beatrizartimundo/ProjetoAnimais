import { Injectable } from '@angular/core';
import {animais} from './animais.model';
import {Observable, EMPTY} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = "http://localhost:4200/cadastro"

  constructor(private http: HttpClient) { }

    create( Animais: animais) : Observable<animais>{
      return this.http.post<animais>(this.baseURL,Animais)
    }
    //   .pipe(
    //     catchError((e)=> this.errorHandler(e))
    //   )
    // }
    // errorHandler(e: any):Observable<any>{
    //   this.showMessage('erro',true)
    //   return EMPTY
    // }
  
}
