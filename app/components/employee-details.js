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
  @tracked btnSaveLabel = 'Save'

  constructor() {
    super(...arguments);

    if(this.args.empData){
      this.name = this.args.empData.name;
      this.phoneNo = this.args.empData['phone-no'];
      this.email = this.args.empData.email;
      this.address =this.args.empData.address;
      this.gender = this.args.empData.gender;
      this.age = this.args.empData.age;
      this.jobTitle = this.args.empData['job-title'];
      this.exp = this.args.empData.exp;
      this.domain = this.args.empData.domain;
      this.technology = this.args.empData.technology;
      this.reportingName = this.args.empData['reporting-name'];
      this.reportingJobTitle = this.args.empData['reporting-job-title'];
      this.reportingPhoneNo = this.args.empData['reporting-phone-no'];
      this.reportingEmailId = this.args.empData['reporting-email-id'];
      this.empId = this.args.empData['emp-id'];
      this.btnSaveLabel = 'Update'
    }
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
      empId: this.btnSaveLabel === 'Save' ? this.getRandomInt(1, 9999999) : this.args.empData['emp-id']
    }

  if(this.btnSaveLabel === 'Save'){
    try {
      await this.employee.addEmployee(empObj);
      console.log('Employee saved successfully!');
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  } else{
    try {
      await this.employee.updateEmployee(empObj);
      console.log('Employee Updated successfully!');
    } catch (error) {
      console.error('Error Updating employee:', error);
    }
  }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive, and the minimum is inclusive
  }
}




