import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {IproductDetail} from 'src/app/IproductDetail';
@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent implements OnInit {

@Input() productDetail:any;
@Output() updateTotalPrice = new EventEmitter<string>(); 
total_price:number;
total_stock:number;
total:number;
productId:number;
products:IproductDetail[];

  constructor() { }

  ngOnInit() {
    this.total_price = 0;
    this.total_stock = 0;
    this.total=0;
    this.products=[
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
        'id':8,
        'title':"Tresseme",
        'price':320,
        'stock':10
        
  
      },
      {
        'id':9,
        'title':"Lorial",
        'price':400,
        'stock':15
        
  
      }
    ]
  
  
  } 
  
  totalStock()
  {
    this.total_stock=0;
   
      this.products.map((item) => 
      {
            this.total_stock += item.stock;
      })
      return this.total_stock;
  

  }
  totalprice()
  {
    this.total_price = 0;
    this.products.map((item) => 
    {
          this.total_price += item.price;
    })
    return this.total_price;
}
sumTotal()
{
 
      this.total = 0;
    this.products.map((item) => 
    {
          this.total += (item.price * item.stock);
    })
    return this.total;
      
         
}

showNewAddProduct(event)
{

  console.log("show new product")


}
  
}
