import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './module/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employeeForm: FormGroup;
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[]  = [];

  constructor() {
    // Initialize the form group
    this.employeeForm = this.createForm();
    debugger;
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null) {
      const paserData = JSON.parse(oldData);
      this.employeeList = paserData;
  }
  }
  ngOnInit(): void {
    // Perform any initialization logic here if needed
  }

  // Method to create the form group
  createForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(this.employeeObj.id),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      email: new FormControl(this.employeeObj.email),
      contactNo: new FormControl(this.employeeObj.contactNo)
    });
  }
  onSave(): void {
    debugger;
    const oldData = localStorage.getItem("EmpData");
    if (oldData != null) {
      const parsedData = JSON.parse(oldData);
      this.employeeForm.controls['id'].setValue(parsedData.length + 1);
      this.employeeList.unshift(this.employeeForm.value);
    } else {
      this.employeeForm.controls['id'].setValue(1); // Initialize ID for the first entry
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  }
   // Method to handle editing an employee
   editEmployee(index: number) {
    const employee = this.employeeList[index];
    this.employeeForm.setValue({
      id: employee.id,
      name: employee.name,
      city: employee.city,
      email: employee.email,
      contactNo: employee.contactNo
    });
  }

  // Method to handle deleting an employee
  deleteEmployee(index: number) {
    this.employeeList.splice(index, 1);
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  }
}
