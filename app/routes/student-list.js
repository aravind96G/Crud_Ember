import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class StudentListRoute extends Route {
  @service employee;
  @service router;

  @tracked employees;

  async model() {
    console.log('student list route model')
    let employeesGet = await this.employee.getAllEmployees();
    let employeeArray = Array.from(employeesGet); // Convert proxy object to a regular array

    let jsonDataArray = employeeArray.map(employee => {
      return employee.serialize({ includeId: true }); // Use serialize to get plain JSON objects
    });
    let extractedData = jsonDataArray.map(item => item.data.attributes);
    let jsonData = JSON.stringify(extractedData); // Convert the JavaScript array to a JSON string
    this.employees = JSON.parse(jsonData);
    console.log(this.employees, 'emp model')
    return this.employees;
  }

  @action
  reloadModel() {
    this.refresh(); // Reload the model from the server
  }

}