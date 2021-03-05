import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: number;
  employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.employee = {} as Employee;
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params.id;
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(data => window.location.assign('/employees')
    );
  }

  Cancel(): void {
    this.router.navigate(['/employees']);
  }

}
