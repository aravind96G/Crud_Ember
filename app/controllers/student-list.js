import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import toastr from 'toastr';

export default class StudentlistController extends Controller {
  @service router;
  @service employee;

  @tracked jrc;
  @tracked searchQuery = '';
  @tracked isLoading = false;

  async init() {
    super.init();
    console.log('studentlist page init');
  }

  @action
  goToEmployeeForm() {
    this.router.transitionTo('new-employee');
  }

  @action
  handleSearchInput(event) {
    this.searchQuery = event.target.value;
  }

  @action
  goToStudentListAllPage() {
    this.router.transitionTo('student-list-all');
  }

  @action
  reloadModel() {
    this.send('refresh'); // Reload the model from the server
  }

  @action
  editEmployee(empId, event) {
    event.preventDefault();
    event.stopPropagation(); // Prevent the event from reaching the parent tr element
    // Your edit logic here
    this.router.transitionTo('employee', empId);
  }

  @action
  async deleteEmployee(id, event) {
    event.preventDefault(); // Prevent the default button click behavior
    event.stopPropagation(); // Prevent the event from reaching the parent tr element

    var isYes = window.confirm('Do you want Delete Employee ?');
    if (!isYes) {
      return;
    }
    let response = await this.employee.deleteEmployee(id);
    let employeesGet = await this.employee.getAllEmployees();
    let employeeArray = Array.from(employeesGet); // Convert proxy object to a regular array

    let jsonDataArray = employeeArray.map((employee) => {
      return employee.serialize({ includeId: true }); // Use serialize to get plain JSON objects
    });
    let extractedData = jsonDataArray.map((item) => item.data.attributes);
    let jsonData = JSON.stringify(extractedData); // Convert the JavaScript array to a JSON string
    this.jrc = JSON.parse(jsonData);
    console.log(this.employees, 'employeee in delete method');

    if (response === 'success') {
      console.log('deleted successfully');
      this.set('model', this.jrc);
      toastr.error('Deleted Successfully', 'Delete Success');
    }
  }

  get filteredModel() {
    // this.isLoading = true;
    let searchQuery = this.searchQuery.toLowerCase();
    // this.isLoading = false;
    return this.model.filter((item) => {
      let name = item.name.toLowerCase();
      let email = item.email.toLowerCase();

      return name.includes(searchQuery) || email.includes(searchQuery);
    });
  }
}
