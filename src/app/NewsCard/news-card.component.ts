import { Component, Input } from "@angular/core";
import { IProduct } from "../../assets/Shared/Interface/products";

@Component({
    selector:"app-card",
    templateUrl:"./news-card.component.html",
    styleUrls:['./news-card.component.scss']
})

export class NewsCardComponent{
    @Input() product!:IProduct;
    getauthor(author:string):string {
        const words = author.split(" ");
        if(words.length > 2){
            return words.slice(0,2).join(' ')
        }
        return author
      }
}