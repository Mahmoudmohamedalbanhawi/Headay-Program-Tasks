import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductsService } from "../Service/products.service";
import { IProduct } from "../../assets/Shared/Interface/products";
import { Subscription } from "rxjs";

@Component({
    selector:"app-HotTopics",
    templateUrl:"./hot-topics.component.html",
    styleUrls:['./hot-topics.component.scss']
})
export class HotTopicsComponent implements OnInit , OnDestroy{
    Title:string ="Hot Topics"
    hamada:string = "Hamda yel3eb"
    HotTopics:IProduct[] = []
    ErrorMessage:string = ``
    sub!:Subscription
    constructor(private ServiceProduct:ProductsService){}
    ngOnInit(): void {
       this.sub = this.ServiceProduct.fetchProducts().subscribe({
            next:next=>{
                this.HotTopics = next.articles
               
            },
            error:err=>{
                this.ErrorMessage = err;
            }
        })
    }
    get firstWordDescription():string {
       
        return this.HotTopics[0].description.split(' ')[0]
    }
    get remainingText():string {
        return this.HotTopics[0].description.split(' ').slice(1).join(' ')
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }
}
