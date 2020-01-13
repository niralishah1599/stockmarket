import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

 
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  @Input() productDetail: any;
  @Output() updateStock = new EventEmitter<string>();
  stock:any;
  constructor() { }

  ngOnInit()
  {
  }

  updateProductStock(data)
  {
  
    this.productDetail.stock= this.stock;
    console.log("child stock");
    this.productDetail.totalprice=this.productDetail.stock*this.productDetail.price;
    console.log("child stock total price" +this.productDetail.totalprice);
    this.updateStock.emit(data.stock);
  }
}
