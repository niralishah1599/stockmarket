import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { isNumber } from 'util';

 
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  @Input() productDetail: any;
  @Output() updateStock = new EventEmitter<string>();
  stock:number=0;
  
  
  constructor() { }

  ngOnInit()
  {
  }
 
  updateProductStock(data)
  {
 

      
      console.log(this.productDetail.stock);
      console.log("child stock");
      this.productDetail.totalprice=this.productDetail.stock*this.productDetail.price;
      console.log("child stock total price" +this.productDetail.totalprice);
      this.updateStock.emit(data.stock);
    
    
  }
}
