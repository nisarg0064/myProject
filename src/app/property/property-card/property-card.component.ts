import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component(
    {
        selector:'app-property-card',
        templateUrl:'property-card.component.html',
        styleUrls:['property-card.component.css']
    }
)
export class PropertyCardComponent{
 Houses:any[]=[{
    Name:"Laxmi Villa",
    Url:"./assets/img1.jpg",
    Description:"Color blue 2bhk lawn atached pool",
    price:1510
 },{
    Name:"Laxmi Villa 2",
    Url:"./assets/img2.jpg",
    Description:"Color blue 2bhk lawn atached pool",
    price:1830
 },{
    Name:"Laxmi Villa 3",
    Url:"./assets/img3.jpg",
    Description:"Color blue 2bhk lawn atached pool",
    price:2010
 }]

}


 