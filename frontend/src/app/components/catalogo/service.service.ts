import { Injectable } from '@angular/core';
import {animais} from './animais.model';
import {Observable, EMPTY} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = "http://localhost:3001/animais"

  constructor(private http: HttpClient,
    private snackbar: MatSnackBar) { }

    create( Animais: animais) : Observable<animais>{
      return this.http.post<animais>(this.baseURL,Animais)
      .pipe(catchError((e)=> this.errorHandler(e))
      )
    }
    errorHandler(e: any):Observable<any>{
      this.showMessage('erro',true)
      return EMPTY
    }

    showMessage(msg:string, isError:boolean = false): void{
      this.snackbar.open(msg,'x',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass:isError ? ["msg-error"]:["msg-sucess"],
      })
    }
    read(): Observable<animais[]>{
      return this.http.get<animais[]>(this.baseURL)
    }
    
    readById(id:string):Observable<animais>{
      const url = ` ${this.baseURL}/${id}`
      return this.http.get<animais>(url)
    }

    update(Animais:animais): Observable<animais>{
      const url = `${this.baseURL}/${Animais.id}`
      return this.http.put<animais>(url,Animais)
    }

    delete(id:string): Observable<animais>{
      const url =`${this.baseURL}/${id}`
      return this.http.delete<animais>(url)
    }
  
}
