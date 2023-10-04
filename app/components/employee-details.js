import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'

export default class EmployeeDetailsComponent extends Component {
  @service employee;

  @tracked name;
  @tracked phoneNo;
  @tracked email;
  @tracked address;
  @tracked gender;
  @tracked age;
  @tracked jobTitle;
  @tracked exp;
  @tracked domain;
  @tracked technology;
  @tracked reportingName;
  @tracked reportingJobTitle;
  @tracked reportingPhoneNo;
  @tracked reportingEmailId;

  constructor() {
    super(...arguments);

    let employeeData = this.args.model;
    console.log(employeeData)
    // if (employeeData) {
    //   this.name = employeeData.name;
    //   this.phoneNo = employeeData.phoneNo;
    //   this.email = employeeData.email;
    //   // ... set other properties
    // }
  }

  @action
  handleInputValues(fieldName, event) {
    let inputValue = event.target.value;
    this[fieldName] = inputValue;
  }


  @action
  async saveEmployee() {
    let empObj = {
      name: this.name,
      phoneNo: this.phoneNo,
      email: this.email,
      address: this.address,
      gender: this.gender,
      age: this.age,
      jobTitle: this.jobTitle,
      exp: this.exp,
      domain: this.domain,
      technology: this.technology,
      reportingName: this.reportingName,
      reportingJobTitle: this.reportingJobTitle,
      reportingPhoneNo: this.reportingPhoneNo,
      reportingEmailId: this.reportingEmailId,
      empId: this.getRandomInt(1, 9999999)
    }

    try {
      await this.employee.addEmployee(empObj);
      console.log('Employee saved successfully!');
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive, and the minimum is inclusive
  }
}




