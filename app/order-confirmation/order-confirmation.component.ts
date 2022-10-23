import { Component, Input, OnInit } from '@angular/core';
import { PreviewService } from '../Services/preview.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  Full_Name:string='sdalksmdam';
  total:string='2222222222222222';
  Date:string='';
  Time:string='';
  constructor(private previewservice:PreviewService) { }

  ngOnInit(): void {
    this.Full_Name= this.previewservice.Return_User_Name();
    this.total=this.previewservice.Return_User_Total();
  }

}
