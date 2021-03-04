import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'localhost:8080/employee/';

  constructor() {}

  getEmployees(): Observable<any> {
    return;
  }
}
