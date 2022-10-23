import { Component, Input, OnInit } from '@angular/core';
import { product } from '../Modules/Product';
import { ToCartService } from '../Services/to-cart.service';
import { PreviewService } from '../Services/preview.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:product;
  @Output() Notify_Parent:EventEmitter<string>=new EventEmitter();
  constructor(private tocartservice:ToCartService,private previewservice:PreviewService ) {
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
      Quantity:1,
    }
   }

  ngOnInit(): void {}

  Add_To_Cart(Chosen_Product:product):void{
    this.tocartservice.AddToCart(Chosen_Product);
    this.Notify_Parent.emit("The Product Has Been Added To The Cart");
  }

  previewproduct(requiredproduct:product){
    this.previewservice.Preview_Product(requiredproduct);
   }
}
