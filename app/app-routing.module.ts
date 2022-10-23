import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
{path: '',component:ProductListComponent},
{path: 'cart', component:CartComponent},
{path: 'product-item-details', component:ProductItemDetailsComponent},
{path: 'order-confirmation',component:OrderConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
