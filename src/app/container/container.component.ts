import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;
  constructor() {}
  ngOnInit(): void {}
  ngAfterContentInit(): void {
     // changing name from here
     console.log('ngAfterContentInit :1 ', this.employee.empName);
     this.employee.empName = 'Apoorva Kashyap';
    console.log('ngAfterContentInit :2 ', this.employee.empName);
  }
}
