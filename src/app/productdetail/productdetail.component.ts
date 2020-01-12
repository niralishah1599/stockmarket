import { Component,Input, Output,EventEmitter,OnInit,} from '@angular/core';
import { IproductDetail } from '../IproductDetail';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

@Input() productDetail:any;
@Output() updateProductTotalPrice:EventEmitter<{productDetail:any,totalprice:number}>;
@Output() cPrc = new EventEmitter<string>();
totalprice:any;
  constructor() {}
 
  ngOnInit()
{  
 this.updateTotalPrice();
 this.childTprc();
} 
 totalPrc = 0;
public updateTotalPrice() 
{
  console.log("Working!!");
  // for(let product of this.productDetail){
  //    product.totalprice = Number(product.price) * Number(product.stock);
  // }
  // this.productDetail.forEach(element => {
  //   element.totalprice = Number(element.price) * Number(element.stock);
  // });
  console.log(this.productDetail.id);
  this.productDetail.totalprice = Number(this.productDetail.price) * Number(this.productDetail.stock);
  console.log(this.productDetail.totalprice);
//this.totalprice=data.price*data.stock;
// this.updateProductTotalPrice.emit({ productDetail: data, 
//   totalprice:this.totalprice});
}
 childTprc(){
     this.cPrc.emit(this.totalPrc.toString());
   }
   
}
export function cc(){
  console.log("Calling CC!!");
  
}
    
  



