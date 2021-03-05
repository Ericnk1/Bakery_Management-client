import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'employee';

  constructor(private httpClient: HttpClient) {
  }

  // Read
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  // Create
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

//  Update
  public updateEmployee(id: number, newEmployee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseURL + '/' + id,  newEmployee);
  }

//  Delete
  public deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.baseURL + '/' + id);
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseURL + '/' + id);
  }
}
