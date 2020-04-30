import { Component } from '@angular/core';
import { MyserviceService, User } from './myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint2Angular';
  service:MyserviceService;
  router:Router;
  response: User[]=[];
  constructor(service:MyserviceService,  router:  Router) {
    this.service=service;
   this.router=router;
   }

  onSubmit(details:any)
  {
// console.log(details.username)
// this.service.validate(details.username,details.password).subscribe((data)=>{this.dat1(data),console.log("gvg"+data)})
//console.log(this.response)
console.log("hello")
this.router.navigate(['main']);
  }
  dat1(data){
    this.response=data
    if(this.response[0]!=null)
{
  console.log("hello"+this.response)
  this.router.navigate(['/main']);
}
else{
  alert("enter valid user name password");
}
   }
}
