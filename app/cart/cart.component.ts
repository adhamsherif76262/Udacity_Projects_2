import { Component,OnInit} from '@angular/core';
import { product } from '../Modules/Product';
import { ToCartService } from '../Services/to-cart.service';
import { PreviewService } from '../Services/preview.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Cart_List:product[]=[];
  total:number=0;
  Address:string='';
  Credit_Card_Number:Number=0;
  Full_Name:string='';

  constructor(private tocartservice:ToCartService,private previewservice:PreviewService ) { }

  ngOnInit(): void {
    this.Cart_List=this.tocartservice.Get_Cart_List();
  }
  clearcart(): void {
    this.tocartservice.ClearCart();
    this.Cart_List = [];
    this.total=0;
    alert("The Cart Has Been Cleared!");
  }
  Remove_Product(Remove_Product:product):void{
    this.total=this.The_CartTotal();
      this.tocartservice.RemoveProduct(Remove_Product);
  }
  CartTotal(cartproduct:product,quantity:number):number{
    if(quantity===0)
    {
      this.Remove_Product(cartproduct);
    }
      this.total=0;
      cartproduct.Quantity=quantity;
      for(let i=0; i<this.Cart_List.length;i++){
        this.total+=this.Cart_List[i].Quantity*this.Cart_List[i].price;
      }
      return this.total;
  }
  The_CartTotal():number{
    this.total=0;
      for(let i=0; i<this.Cart_List.length;i++){
        this.total+=this.Cart_List[i].Quantity*this.Cart_List[i].price;
      }
      return this.total;
  }
  Return_The_User_Name(fullname:string):void{
    this.previewservice.Get_User_Name(fullname);
  }
  Return_The_User_Total(usertotal:number):void{
    this.previewservice.Get_User_Total(usertotal);
  }
}

