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
sumOfTotal:number;
productId:number;
products:IproductDetail[]=[];

  constructor() { }

  ngOnInit() {
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
  this.totalprice();
  this.updateProductStock();
  this.sumTotal();
  } 
  
  updateProductStock()
  {
    
    this.total_stock = this. products.reduce((totalStock, product) => {
          return totalStock += product.stock
      }, 0)
      console.log("total stock is"+this.total_stock);
      this.sumTotal();

  }
  totalprice()
  {
     this.total_price = this. products.reduce((totalPrice, product) => 
     {
          return totalPrice += product.price
      }, 0)
      console.log(this.total_price);
}
sumTotal()
{
  this.sumOfTotal = this. products.reduce((total, product) => 
     {
          return total += (product.price * product.stock);
      }, 0)
      console.log("sum is" +this.sumOfTotal);
      
}
deleteProduct(product)
{
  console.log("delete");
  
  
  let item = this.products.find(item => item.id == product.id)
    this.products.splice(this.products.indexOf(item), 1)
    console.log(item);

    this.totalprice();
  this.updateProductStock();
  this.sumTotal();

var lastProductId = this.products[this.products.length-1].id;
console.log(lastProductId);
}
showNewAddProduct(event)
{

  console.log("show new product")
  this.totalprice();
  this.updateProductStock();
  this.sumTotal();

}
  
}
