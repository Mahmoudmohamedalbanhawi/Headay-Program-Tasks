import { Component, OnInit } from "@angular/core";
import { ICurrency } from "../../assets/Shared/Interfaces/Currency";

@Component({
    selector:"app-currency",
    templateUrl:"./currency-section.component.html",
    styleUrls:["./currency-section.component.scss"]
})
export class CurrencyComponent implements OnInit{
    handlerr:string = ''
   private _amount:number | null = null ;
   private _fromCurrency:string = 'USD';
   private _toCurrency:string = 'EGP';
     private  _ConvertAmount: number | null = null ;
    currencies:ICurrency[] = [];
    currencyRate:{[key: string]: {[key:string]:number}} ={
        'USD': {'EGP': 50.9 , 'EUR': 0.92 , 'GBP': 0.77},
        'EGP': {'USD':0.020 , 'EUR':0.019 , 'GBP':0.016},
        'EUR': { 'USD': 1.09, 'EGP': 33.3, 'GBP': 0.83 },
        'GBP': { 'USD': 1.30, 'EGP': 40.0, 'EUR': 1.20 }
    };
    ngOnInit(): void {
        this.currencies = [
        {currency:'USD' , CurrencySymbol:'$'},
        {currency: 'EGP' , CurrencySymbol:'EGP'},
        {currency:'EUR', CurrencySymbol:'€'},
        {currency:'GBP' , CurrencySymbol:'£'}
        ]
    }
    get amount():number | null {
        return this._amount;
    }
    set amount(value: number | null){
        this._amount = value;
    }
    get fromCurrency(){
        return this._fromCurrency;
    }
    set fromCurrency(value : string){
        this._fromCurrency = value;
    }
    get toCurrency():string {
        return this._toCurrency;
    }
    set toCurrency(value : string){
        this._toCurrency = value
    }
    get ConvertAmount() : number | null
  {
    return this._ConvertAmount;
  }
    convertCurrency():void{
       
        if(this._fromCurrency === this._toCurrency){
            this.handlerr = 'you cant convert between both same currency'
        }
        if (this._amount !== null) {
            const rate = this.currencyRate[this.fromCurrency][this.toCurrency];
            this._ConvertAmount = this._amount * rate;
          } else {
            this._ConvertAmount = null;
          }
    }
}