import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductsService } from "../Service/products.service";
import { IProduct } from "../../assets/Shared/Interface/products";
import { Subscription } from "rxjs";

@Component({
    selector:"app-latestnews",
    templateUrl:"./latest-news.component.html",
    styleUrls:['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit , OnDestroy{
    Title:string ="Latest News";
    products:IProduct[] = [];
    errorMessage = ``;
    sub!:Subscription
    constructor(private product:ProductsService){

    }
    ngOnInit(): void {
      this.sub =  this.product.fetchProducts().subscribe({
            next:products=> {
                this.products = products.articles
                console.log(this.products)
            },
            error:err=> this.errorMessage = err
        })
    }
    ngOnDestroy(): void {
         this.sub.unsubscribe()
    }
    
}