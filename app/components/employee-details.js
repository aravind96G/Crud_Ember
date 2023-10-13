import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import toastr from 'toastr';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

export default class EmployeeDetailsComponent extends Component {
  @service employee;
  @service router;

  @tracked name;
  @tracked phoneNo;
  @tracked email;
  @tracked address;
  @tracked gender = 'male';
  @tracked age;
  @tracked jobTitle;
  @tracked exp;
  @tracked domain;
  @tracked technology;
  @tracked reportingName;
  @tracked reportingJobTitle;
  @tracked reportingPhoneNo;
  @tracked reportingEmailId;
  @tracked btnSaveLabel = 'Save';
  @tracked formValidation = {};
  @tracked isLoading = false;

  constructor() {
    super(...arguments);

    if (this.args.empData) {
      this.name = this.args.empData.name;
      this.phoneNo = this.args.empData['phone-no'];
      this.email = this.args.empData.email;
      this.address = this.args.empData.address;
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
      this.btnSaveLabel = 'Update';
    }
  }

  initializeState() {
    this.formValidation = {};
  }

  @action
  handleInputValues(fieldName, event) {
    this.initializeState();
    console.log(fieldName, event.target.value);
    let inputValue = event.target.value;
    this[fieldName] = inputValue;
  }

  @action
  goBack() {
    window.history.back();
  }

  @action
  formValidationFn() {
    this.formValidation = {};
    let isValid = true;
    if (!this.name) {
      this.formValidation['name'] = 'Name is Mandatory';
      isValid = false;
    }
    if (!this.phoneNo) {
      this.formValidation['phoneNo'] = 'Phone Number is Mandatory';
      isValid = false;
    } else {
      if (!phoneRegex.test(this.phoneNo)) {
        this.formValidation['phoneNo'] = 'Invalid Phone No';
        isValid = false;
      }
    }
    if (!this.email) {
      this.formValidation['email'] = 'EmailId is Mandatory';
      isValid = false;
    } else {
      if (!emailRegex.test(this.email)) {
        this.formValidation['email'] = 'Invalid Email Id';
        isValid = false;
      }
    }
    if (!this.address) {
      this.formValidation['address'] = 'Address is Mandatory';
      isValid = false;
    }
    if (!this.gender) {
      this.formValidation['gender'] = 'Gender is Mandatory';
      isValid = false;
    }
    if (!this.age) {
      this.formValidation['age'] = 'Age is Mandatory';
      isValid = false;
    }
    if (!this.jobTitle) {
      this.formValidation['jobTitle'] = 'JobTitle is Mandatory';
      isValid = false;
    }
    if (!this.domain) {
      this.formValidation['domain'] = 'Domain is Mandatory';
      isValid = false;
    }
    if (!this.technology) {
      this.formValidation['technology'] = 'Technology is Mandatory';
      isValid = false;
    }
    if (!this.exp) {
      this.formValidation['exp'] = 'Experience is Mandatory';
      isValid = false;
    }
    if (!this.reportingName) {
      this.formValidation['reportingName'] = 'Reporting Name is Mandatory';
      isValid = false;
    }
    if (!this.reportingJobTitle) {
      this.formValidation['reportingJobTitle'] =
        'Reporting Job Title is Mandatory';
      isValid = false;
    }
    if (!this.reportingPhoneNo) {
      this.formValidation['reportingPhoneNo'] =
        'Reporting Phone No is Mandatory';
      isValid = false;
    } else {
      if (!phoneRegex.test(this.reportingPhoneNo)) {
        this.formValidation['reportingPhoneNo'] = 'Invalid Phone No';
        isValid = false;
      }
    }
    if (!this.reportingEmailId) {
      this.formValidation['reportingEmailId'] =
        'Reporting Email Id is Mandatory';
      isValid = false;
    } else {
      if (!emailRegex.test(this.reportingEmailId)) {
        this.formValidation['reportingEmailId'] = 'Invalid Reporting Email Id';
        isValid = false;
      }
    }
    return isValid;
  }

  @action
  async saveEmployee() {
    this.isLoading = true;
    if (!this.formValidationFn()) {
      this.isLoading = false;
      return;
    }

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
      empId:
        this.btnSaveLabel === 'Save'
          ? this.getRandomInt(1, 9999999)
          : this.args.empData['emp-id'],
    };

    if (this.btnSaveLabel === 'Save') {
      try {
        await this.employee.addEmployee(empObj);
        console.log('Employee saved successfully!');
        toastr.success('Saved Successfully', 'Success');
        this.router.transitionTo('student-list');
      } catch (error) {
        console.error('Error saving employee:', error);
      }
    } else {
      try {
        await this.employee.updateEmployee(empObj);
        console.log('Employee Updated successfully!');
        toastr.success('Updated Successfully', 'Success');
        this.router.transitionTo('student-list');
      } catch (error) {
        console.error('Error Updating employee:', error);
      }
      this.isLoading = false;
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive, and the minimum is inclusive
  }
}
