import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import {UpdateEmployeeComponent} from './employees/update-employee/update-employee.component';
import {UpdateProductComponent} from './products/update-product/update-product.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
