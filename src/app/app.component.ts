import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'registerform';
  text:string;
  emp:any[];
  constructor( private _myservice:MyserviceService){
  }
  ngOnInit(){
    // this.text=this._myservice.display();
    // this.emp=this._myservice.employees;
  }
}
