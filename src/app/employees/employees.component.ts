import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  form: FormGroup;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployeesList().subscribe(value => {
      console.log(value);
      this.employees = value;
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      // id: ['', [Validators.required, Validators.pattern('^[0-9]\\d*$')]],
      id: null,
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  addEmployee(): void {
    const newEmployee: Employee = {
      id: null,
      email: this.form.get('email').value,
      name: this.form.get('name').value
    };
    // this.employees.push(newEmployee);
    this.employeeService.createEmployee(newEmployee).subscribe(value => window.location.assign('/employees'));
    this.initForm();
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(value => window.location.assign('/employees'));
  }

  InvalidInput(fieldName): boolean {
    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
  }
}
