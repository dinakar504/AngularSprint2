import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';

import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdercomponentComponent,
    
    FetchOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [HttpClient,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
