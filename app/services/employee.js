// app/services/employee-data.js

import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class EmployeeService extends Service {
  @service store;

  getAllEmployees() {
    return this.store.peekAll('employee');
  }

  async addEmployee(emp) {
    console.log(emp, 'addedemp')
    // let newEmployee = this.store.createRecord('employee', emp);
    // newEmployee.save();

    const employee = this.store.createRecord('employee');
    employee.setProperties(emp);

    await employee.save();
  }

  async findEmployeeByEmpId(empId) {
    console.log(empId, 'find by id');
    let employeeJson;
    try {
      let employee = await this.store.queryRecord('employee', { filter: { 'emp-id': empId } });

      if (employee) {
        // Employee with the specified emp-id found
         employeeJson = employee.serialize();
        console.log('Employee found:', employeeJson.data.attributes);
      } else {
        // Employee with the specified emp-id not found
        console.log('Employee not found');
      }
    } catch (error) {
      // Handle errors, e.g., server error, network issues, etc.
      console.error('Error finding employee:', error);
    }
    return employeeJson?.data?.attributes;
  }

  async updateEmployee(params) {
    try {
      // Fetch the employee record by emp-id
      let employee = await this.store.queryRecord('employee', { filter: { 'emp-id': params.emp_id } });

      if (employee) {
        // Update attributes
        employee.set('name', params.name);
        employee.set('phoneNo', params.phoneNo);
        // ... update other attributes ...

        // Save the updated record
        await employee.save();
        console.log('Employee updated successfully:', employee);
      } else {
        console.log('Employee not found');
      }

      return employee;
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  }

  async deleteEmployee(id) {
    try {
      let employee = await this.store.queryRecord('employee', { filter: { 'emp-id': id } });
      // Delete the record
      await employee.destroyRecord();
      console.log('Employee deleted successfully.');
      
      // Optionally, transition to another route after deletion
      // this.transitionToRoute('some-other-route');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }


}

