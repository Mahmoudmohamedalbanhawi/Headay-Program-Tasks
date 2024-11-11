import { Injectable } from '@angular/core';
import { IProduct } from '../../assets/Shared/Interface/products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ApiKey = `e103084dbd684ebda4232c01aa8ac30e`
  private productUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.ApiKey}` 
  constructor(private http:HttpClient){}
  fetchProducts(): Observable<any>{
    return this.http.get<IProduct>(this.productUrl).pipe(
      tap(data => JSON.stringify(data)),
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