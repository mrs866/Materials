import { Component, OnInit, Input } from '@angular/core';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor( public empService: EmployeeserviceService ) { }

  @Input() deptName:string='';
  
  ngOnInit() {
    alert(this.deptName) ;
    this.empService.fetchEmployeeByDept(this.deptName)
  }
}
