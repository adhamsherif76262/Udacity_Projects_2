import { Component, EventEmitter, OnInit } from '@angular/core';
import { product } from '../Modules/Product';
import { ToCartService } from '../Services/to-cart.service';
import { PreviewService } from '../Services/preview.service';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

    Products:product[]=[];
    Required_Product_ID:number=0;
    constructor(private tocartservice:ToCartService,
                private previewproductservice:PreviewService,
                private productservice:ProductServiceService) {}

  ngOnInit(): void {
    this.Products=this.previewproductservice.Return_Product();
  }

  Push_To_Cart(certainproduct:product):void{
    this.tocartservice.AddToCart(certainproduct);
    alert("The Product Has Been Added To The Cart");
  }
}
