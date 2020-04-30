import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';



const routes: Routes = [
{path:'add',component:OrdercomponentComponent},
{path:'list',component:FetchOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
