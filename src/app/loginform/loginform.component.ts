import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  constructor(private routes : Router, private service : MyserviceService) { }
  msg="";
    ngOnInit() {
    }
    check(uname: string, p : string)
    {
      var output = this.service.checkusernameandpassword(uname, p);
      if(output == true)
      {
        this.routes.navigate(['/dashboard']);
      }
      else{
  this.msg ='Invalid username or password';
      }
   
   
  }
  

}
