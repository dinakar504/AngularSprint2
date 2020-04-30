import { Component, OnInit } from '@angular/core';
import { MyserviceService, Rawspecs, supplier, warehouse, Order } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent implements OnInit {
  warehouseid:number;
  supid:number;
  quanvalue:number;
  rmsid:number;
  rmname:string;
  selected:number=1;
  selected1:number=0;
  selected2:number=1;
  router: Router;
  service: MyserviceService;
  spec:Rawspecs[]=[];
  check:boolean=false;
  check1:boolean=false;
  check2:boolean=false;
  sup: supplier[]=[];
  war: warehouse[]=[];
 // creating object
 order1:Order = new Order("", 0,0,0, 0,0,"" ,"",
  "",
  0,
   "", 0)
  check3: boolean=false;
  message: Object;
  price_p_u: any;
  check4: boolean=false;
  message1: number;
  quantity_p_u: any;

  constructor(service:MyserviceService, router:  Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit(): void {
    this.service.getSpecs().subscribe(response => this.handleSuccessfulResponse(response))
    this.service.getsup().subscribe(data=>this.dat1(data))
    this.service.getware().subscribe(data=>this.dat2(data))

  }

  onSubmit()
  {
    console.log(this.quanvalue)
      
      this.order1.rmsid=this.selected
      this.order1.quanvalue=this.quanvalue
      this.order1.supplierid=this.selected2
      this.order1.warehouseid=this.selected1

      console.log(this.order1)
     this.service.addEmp(this.order1).subscribe((data)=>this.message=data)
     this.router.navigate(['list'])
  }
  onOptionsSelected(value:string){
    console.log("the selected value is " + value+this.spec.length);
    let i:number;
    if(this.quanvalue>0)
    {
      
    
    
    for(i=0;i<this.spec.length;i++)
    {
     if(this.spec[i].rmsid==this.selected)
      {
             this.quantity_p_u=this.spec[i].price_p_u
             console.log(this.quantity_p_u*this.quanvalue)
             this.message=this.quantity_p_u
             this.check=false
      }
    }
  }
  else
      alert("Quantity should be minimum 1")
}
  ////////////////////getting initial values
  handleSuccessfulResponse(response) {
    this.spec = response;
    console.log(response)
    console.log(this.spec)
    this.check=true;
  }
  
  dat1(data){
   this.sup=data
  }
  dat2(data){
    this.war=data
   }
}
