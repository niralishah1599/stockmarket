import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { ProductMasterComponent } from './product-master.component';
import { AddProductComponent } from './add-product/add-product.component';

import { DeleteProductComponent } from './delete-product/delete-product.component';
@NgModule({
  declarations: [
    ProductdetailComponent,
    StockComponent,
    ProductMasterComponent,
    DeleteProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[
    ProductdetailComponent,
    StockComponent,
    ProductMasterComponent,
    AddProductComponent
  ]
})
export class ProductMasterModule { }
