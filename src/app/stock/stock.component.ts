import { Component, OnInit,Input } from '@angular/core';
import { cc} from '../productdetail/productdetail.component';
 
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  @Input() productDetail: any;
  stock:any;
  constructor() { }

  ngOnInit() {
  }

  updateProductStock(data)
  {
    console.log(this.productDetail.stock=this.stock);
   cc();
  }
}
