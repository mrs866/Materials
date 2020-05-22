import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
//  employees:any[];
//   constructor() {
//     this.employees=[
//       {
//         empcode:'1234', name:'rupa'
//        },
//        {
//         empcode:'5678', name:'sravanthi'
//        }
//     ];
constructor() { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "admin" && pwd =="admin123"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
}

  }
// display(){
//   return 'Hello sravanthi';
// }



