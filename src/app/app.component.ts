import { Component,OnInit } from '@angular/core';
import { IproductDetail } from './IproductDetail';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'stockmarket';
  products:IproductDetail[]; 
constructor(){}
ngOnInit()
  {
      this.products=
      [
       {
      'id':1,
      'title':"Sunsilk",
      'price':100,
      'stock':20
      

    },
    {
      'id':2,
      'title':"ClinicPLus",
      'price':200,
      'stock':30
      

    },
    {
      'id':3,
      'title':"Head&Shoulder",
      'price':300,
      'stock':10
      

    },
    {
      'id':4,
      'title':"Panteene",
      'price':400,
      'stock':10
      

    },
    {
      'id':5,
      'title':"Garnier",
      'price':500,
      'stock':30    

    },
    {
      'id':6,
      'title':"Dove",
      'price':210,
      'stock':40
      

    },
    {
      'id':7,
      'title':"Herbal",
      'price':220,
      'stock':20
      

    },
    {
      'id':9,
      'title':"Tresseme",
      'price':320,
      'stock':10
      

    },
    {
      'id':10,
      'title':"Lorial",
      'price':400,
      'stock':15
      

    }
  ];

}
  updateProductStock(data)
  {
    console.log(event);
    console.log("parent stock");
    console.log("parent"+data.stock)

  }

  updateProductTotalPrice(data)
  {
    console.log("parent");
    console.log(data.totalPrice);
  }
}

