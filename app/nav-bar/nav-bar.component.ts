import { Component, OnInit } from '@angular/core';
import { ToCartService } from '../Services/to-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private tocartservice:ToCartService) { }

  ngOnInit(): void {
  }

  get_cart_list(){
    this.tocartservice.Get_Cart_List();
  }
}
