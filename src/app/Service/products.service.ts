import { Injectable } from '@angular/core';
import { IProduct } from '../../assets/Shared/Interface/products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Api } from '../../env/api';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  private productUrl = `${Api.ApiUrl}top-headlines?country=us&category=business&apiKey=${Api.ApiKey}` 
  constructor(private http:HttpClient){}
  fetchProducts(): Observable<any>{
    return this.http.get<any>(this.productUrl).pipe(
      map(data =>data.articles),
      catchError(this.handleError)
    )
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = ``;
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured : ${err.error.message}`
    }
    else {
      errorMessage = `Server retured code : ${err.status} , error message is : ${err.message}`
    }
    return throwError(()=> errorMessage)
  }

}