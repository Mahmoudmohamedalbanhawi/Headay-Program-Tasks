import { Component, Input } from "@angular/core";
import { IProduct } from "../../assets/Shared/Interface/products";

@Component({
    selector:"app-card",
    templateUrl:"./product-card.component.html",
    styleUrls:['./product-card.component.scss']
})

export class ProductCardComponent{
    @Input() product!:IProduct;
}