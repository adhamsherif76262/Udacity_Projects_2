import { Injectable } from '@angular/core';
import { product } from '../Modules/Product';
import { ProductServiceService } from './product-service.service';
@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  Products:product[]=[];
  User_Name:string='';
  User_Total:string='';
  Required_ID:number=0;
  constructor(private productservice:ProductServiceService) { }

  Preview_Product(selectedproduct:product):product[]{
    this.productservice.Get_Products().subscribe(Response=>{
      for(let i=0; i<Response.length;i++){
        const Product=Response[i];
        Product["Quantity"]=1;
      }
      this.Products=Response;
    })
    this.Products=this.Products.filter(p=>p.id===selectedproduct.id)
    return this.Products;
  }
  Return_Product():product[]{
    return this.Products
  }
  Get_User_Name(username:string):void{
    this.User_Name=username;
  }
  Get_User_Total(usertotal:number):void{
    this.User_Total=usertotal.toString();
  }
  Return_User_Name():string{
    return this.User_Name;
  }
  Return_User_Total():string{
    return this.User_Total;
  }
}
