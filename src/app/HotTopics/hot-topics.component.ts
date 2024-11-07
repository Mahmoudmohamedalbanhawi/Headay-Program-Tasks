import { Component } from "@angular/core";

@Component({
    selector:"app-HotTopics",
    templateUrl:"./hot-topics.component.html",
    styleUrls:['./hot-topics.component.scss']
})
export class HotTopicsComponent{
    Title:string ="Hot Topics"
    imageUrl:string = "assets/images/img1.png"
}