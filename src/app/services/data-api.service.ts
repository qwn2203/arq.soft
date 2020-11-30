import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}
  apiURL = 'https://boiling-ravine-67253.herokuapp.com/';

  // materia
  // dominio
  // tutor  

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // "Allow": "GET, POST, OPTIONS, PUT, DELETE"
    }),
  };

  getAllMateria() {
    const path = `${this.apiURL}materia`;
    return this.http.get(path, this.httpOptions);
  }

  getAllDominio() {
    const path = `${this.apiURL}dominio`;
    return this.http.get(path, this.httpOptions);
  }

  getAlltutor() {
    const path = `${this.apiURL}tutor`;
    return this.http.get(path, this.httpOptions);
  }

  getAllTema() {
    const path = `${this.apiURL}tema`;
    return this.http.get(path, this.httpOptions);
  }
  
  getAllCuestionario() {
    const path = `${this.apiURL}tutor/5fc2b461f9d7cd63ce9a8ffe`;
    return this.http.get(path, this.httpOptions);
  }

  // login(usuario: any) {
  //   console.log('Login: ' + this.apiURL);
  //   const authData = { ...usuario };
  //   return this.http
  //     .post(this.apiURL + 'login', authData)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // register(usuario: any) {
  //   console.log('Login: ' + this.apiURL);
  //   const authData = { ...usuario };
  //   return this.http
  //     .post(this.apiURL + 'register', authData)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // logout(){
  //   localStorage.clear();

  // }

  // estaAutenticado(): boolean {
  //   if (localStorage.getItem('ident')) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
