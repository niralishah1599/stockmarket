import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IproductDetail } from "src/app/IproductDetail";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  @Input() productDetail: IproductDetail[] = [];
  @Output() newAddProduct = new EventEmitter<{}>();
  newProduct: IproductDetail;
  hiddenForm: boolean = false;
  title: string = "";
  price: number = 0;
  stock: number = 0;
  constructor(private fb: FormBuilder) {}
  addProductForm = this.fb.group({
    title: ["", Validators.required],
    price: [, [Validators.required, Validators.min(1)]],
    stock: [, [Validators.required, Validators.min(1)]]
  });

  ngOnInit() {}

  addProduct(event) {
    this.hiddenForm = true;
  }
  onSubmit() {
    this.title = this.addProductForm.controls["title"].value;
    this.price = this.addProductForm.controls["price"].value;
    this.stock = this.addProductForm.controls["stock"].value;
    this.newProduct = {
      id: this.productDetail.length + 1,
      title: this.title,
      price: this.price,
      stock: this.stock
    };
    this.productDetail.push(this.newProduct);
    this.newAddProduct.emit(this.productDetail);
    this.addProductForm.reset();
  }
  onReset() {
    this.addProductForm.reset();
    this.hiddenForm = false;
  }
}
