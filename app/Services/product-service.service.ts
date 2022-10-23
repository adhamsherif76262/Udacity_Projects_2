import { Injectable } from '@angular/core';
import { product } from '../Modules/Product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) {}

  Get_Products()
  {
     return this.http.get<product[]>("assets/Data.json");
  }

}
