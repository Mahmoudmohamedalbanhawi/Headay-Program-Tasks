import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../Service/products.service";
import { IProduct } from "../../assets/Shared/Interface/products";

@Component({
    selector:"app-latestnews",
    templateUrl:"./latest-news.component.html",
    styleUrls:['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit{
    Title:string ="Latest News";
    products:IProduct[] = []
    constructor(private product:ProductsService){

    }
    ngOnInit(): void {
        this.products = this.product.fetchProducts();
        console.log(this.products)
    }
    
    
}