import { Injectable } from '@angular/core';
import { product } from '../Modules/Product';

@Injectable({
  providedIn: 'root'
})
export class ToCartService {
  total:number=0;
  Cart_List:product[]=[];
  constructor() { }
  Get_Cart_List():product[]{
    return this.Cart_List;
  }
  AddToCart(Chosen_Product:product):product[]{
    if(this.Cart_List.includes(Chosen_Product)){
    this.Cart_List[this.Cart_List.indexOf(Chosen_Product)].Quantity=Chosen_Product.Quantity;
    alert("This Product Already Exsists In The Cart");
    alert("This Required Quantity Has Been Updated");
    }
    else{
      this.Cart_List.push(Chosen_Product);
    }
    return this.Cart_List;
  }
  ClearCart():product[]{
    this.Cart_List=[];
    return this.Cart_List;
  }
  RemoveProduct(productremove:product):product[]{
    this.Cart_List=this.Cart_List.filter(p=>p.id!==productremove.id);
    alert("The Product Has Been Removed From The Cart");
    return this.Cart_List;
  }
}
