import { Component, OnInit } from '@angular/core';
import { MyserviceService, Order } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-orders',
  templateUrl: './fetch-orders.component.html',
  styleUrls: ['./fetch-orders.component.css']
})
export class FetchOrdersComponent implements OnInit {
  orders: Order[]=[];

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.myservice.getOrders().subscribe( response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.orders = response;
  }
  

}
