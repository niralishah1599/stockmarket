import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { IproductDetail } from 'src/app/IproductDetail';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  @Input() productDetail:IproductDetail[];
  @Input() productId:number;
 

constructor() { }

ngOnInit(){}
delete_Item()
{
console.log("delete");
console.log("delete "+ JSON.stringify(this.productDetail));
console.log("delete id" + this.productId);
let item = this.productDetail.find(item => item.id == this.productId)
this.productDetail.splice(this.productDetail.indexOf(item),1);

this.productDetail.map((item, index) => {
  return item.id = index+1;
})

}
}
