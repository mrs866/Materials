import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EmployeeComponent } from './employee.component';
// import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeserviceService } from './services/employeeservice.service';
@NgModule({
   declarations: [],
  exports:[],
  providers:[EmployeeserviceService],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
