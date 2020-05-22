import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MyserviceService } from './myservice.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeserviceService } from './employee/services/employeeservice.service';
import { EmployeeModule } from './employee/employee.module';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { ProductsformComponent } from './productsform/productsform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthguardGuard } from './authguard.guard';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', component: LoginformComponent},
  { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpListComponent,
    EmployeeformComponent,
    ProductsformComponent,
    LoginformComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeeModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [MyserviceService, EmployeeserviceService,AuthguardGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
