import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductdetailComponent } from './product-master/productdetail/productdetail.component';
// import { StockComponent } from './product-master/stock/stock.component';

// import { ProductMasterComponent } from './product-master/product-master.component';
import { ProductMasterModule } from './product-master/product-master.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ProductMasterModule,
   
    // ProductMasterComponent,
  //   ProductdetailComponent,
  //   StockComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
