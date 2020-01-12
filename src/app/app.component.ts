import { Component,OnInit } from '@angular/core';
import { IproductDetail } from './IproductDetail';
import { ProductdetailComponent} from './productdetail/productdetail.component';
import {cc} from './productdetail/productdetail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'stockmarket';
   abc : ProductdetailComponent;
  
  products:IproductDetail[]; 
product:any;
constructor(){}
ngOnInit()
{
this.products=
[
  {
    'id':1,
    'name':"abc",
    'price':200,
    'stock':20,
    'totalprice':10

  },
  {
    'id':2,
    'name':"abc",
    'price':200,
    'stock':30,
    'totalprice':10

  }
];
console.log(this.receivedTprc+"From child to parent");
///cc();
}
receivedTprc = "";
receiveChild($event: any){
  this.receivedTprc = $event;
  
}
updateProductStock(data)
{
  this.product = this.products.find(x => x.id ==  data.productDetail.id);
    this.product.stock = parseInt(data.stock);
}

updateProductTotalPrice(data)
 {
  this.product = this.products.find(x => x.id ==  data.productDetail.id);
    this.product.totalprice = parseInt(data.totalprice);

}
}


