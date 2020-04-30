import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpService: HttpClient) { }
  public getOrders() {
    console.log("ins service get specs");
    return this.httpService.get<Order>("http://localhost:2222/getAll/"+0);
    
  }
  public getSpecs() {
    console.log("ins service get specs");
    return this.httpService.get<Rawspecs>("http://localhost:1111/getALlSPecs");
    
  }
  public validate(uname:string,upass:string) {
    console.log("ins service validate");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<User>("http://localhost:4145/validate/"+uname+"/"+upass);
    
  }
  public getsup() {
    console.log("ins service get sup");
    return this.httpService.get<supplier>("http://localhost:3333/getAllSup");
    
  }
  public getware() {
    console.log("ins service get war");
    return this.httpService.get<warehouse>("http://localhost:4444/getAllDis");
    
  }
  public addEmp(addemp: Order) {
    console.log("ins service ");
    console.log(addemp)
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:2222/orderCreation", addemp, { headers, responseType: 'text'});
  }

}
export class Order
{
 orderid:Number;
  name:string;
  rmsid:number;
  supplierid:number;
  quanvalue:number;
  quanunit:string;
 dateoford:any;
 dateofdel:any;
  totalprice:Number;
  deliveryStus:string;
  warehouseid:number;
  userid:number;
  constructor(name:string, rmsid:number, supplierid:number, quanvalue:number, warehouseid:number,orderid:number,quanunit:string ,dateoford:any,
    dateofdel:any,
     totalprice:Number,
     deliveryStus:string, userid:number){
    this.name = name;
    this.rmsid = rmsid;
    this.supplierid = supplierid;
    this.quanvalue = quanvalue;
    this.warehouseid = warehouseid;
    this.dateoford=dateoford;
   this. dateofdel=dateofdel;
   this.orderid=orderid
    this.totalprice=totalprice;
     this.deliveryStus=deliveryStus;
     this.quanunit=quanunit;
  }
 
}
export class Rawspecs
{
 rmsid:Number;
 rmname:string;
 price_p_u:Number;
 expirydat:string;
 manudate:string;
} 

export class supplier{
  supplierid:Number;
  name:string;
  address:string;
  phonenum:Number;
}
export class warehouse{
  warehouseid:Number;
  name:string;
  address:string;
  phonenum:Number;
}
export class User{
  userid:number;
 uname:string;
  upass:string;
}