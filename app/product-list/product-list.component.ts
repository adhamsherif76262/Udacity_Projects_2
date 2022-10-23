import { Component, OnInit } from '@angular/core';
import { product } from '../Modules/Product';
import { PreviewService } from '../Services/preview.service';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {


  Products: product[]=[];
  constructor(private productservice:ProductServiceService,private previewservice:PreviewService) {}

  ngOnInit(): void {

      this.productservice.Get_Products().subscribe(Response=>{
      for(let i=0; i<Response.length;i++){
        const Product=Response[i];
        Product["Quantity"]=1;
        this.previewservice.Preview_Product(Product);
      }
      this.Products=Response;
    })
  }

  Parent_Notified(message:string):void{
    alert(message);
  }
}
