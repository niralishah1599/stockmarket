import { Component,Input, Output,EventEmitter,OnInit,} from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
 
@Input() productDetail:any;
@Output() updateTotalPrice = new EventEmitter<string>(); 

constructor() {}
 
  ngOnInit()
  {  
    this.calculateTotalPrice();
  } 
  

  calculateTotalPrice()
   {
     console.log("child welcome");
     this.productDetail.totalprice = Number(this.productDetail.price) * Number(this.productDetail.stock);
     console.log(this.productDetail.totalprice);
     console.log("child bye");
     this.updateTotalPrice.emit(this.productDetail);
    
   }
   
}

    
  



