import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  @Input() productDetail:any;
  @Output() deleteItem= new EventEmitter<number>();

  constructor() { }

  ngOnInit()
   {
  }
delete_Item()
{
  console.log("delete");
  console.log("delete id"+this.productDetail.id)
this.deleteItem.emit(this.productDetail.id);
}
}
