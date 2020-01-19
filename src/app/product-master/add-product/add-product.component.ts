import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { IproductDetail } from 'src/app/IproductDetail';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() productDetail:IproductDetail[]=[];
  @Output() newAddProduct = new EventEmitter<{}>();
  newProduct:IproductDetail;
  hiddenForm:boolean=false;
 title:string;
 price:number;
 stock:number;
  constructor(private fb:FormBuilder) {}
  addProductForm = this.fb.group({
title:['',Validators.required],
price:[,Validators.required],
stock:[,Validators.required]

  });

  ngOnInit() {
    
      
  }
  
  addProduct(event)
  {
  
  
    
   console.log("hello");
   this.hiddenForm=true;
  
  }
  onSubmit()
{
this.title=this.addProductForm.controls['title'].value;
this.price=this.addProductForm.controls['price'].value;
this.stock=this.addProductForm.controls['stock'].value;
this.newProduct = {id: this.productDetail.length + 1, title: this.title, price: this.price, stock: this.stock}
  
this.productDetail.push(this.newProduct);

console.log(this.title);
this.newAddProduct.emit(this.productDetail);
this.hiddenForm=false;

}
}
