// app/models/employee.js

import Model, { attr } from '@ember-data/model';

export class EmployeeModel extends Model {
  //   @attr('number') id;
  @attr('string') name;
  @attr('number') empId;
  @attr('number') phoneNo;
  @attr('string') email;
  @attr('string') address;
  @attr('string') gender;
  @attr('number') age;
  @attr('string') jobTitle;
  @attr('string') exp;
  @attr('string') domain;
  @attr('string') technology;
  @attr('string') reportingName;
  @attr('string') reportingJobTitle;
  @attr('number') reportingPhoneNo;
  @attr('string') reportingEmailId;
}

// EmployeeModel.reopenClass({
//     FIXTURES: [
//       { id: 1, name: 'John', phoneNo: 30, email: 'ak@mail.com', address: 'test', gender: 'M', jobTitle:'SE',
//     exp: '5', domain: 'IT', technology:'IT', reportingName:'ranjith', reportingJobTitle: 'M',
//     reportingPhoneNo: 32434, reportingEmailId: 'al@mail.com'
//  }
//       // Add more fixture data as needed
//     ]
//   });

export default EmployeeModel;

// EmployeeModel.reopenClass({
//     // Static properties or methods go here
//     // For example:
//     staticProperty: 'some value',
//     staticMethod() {
//       return 'Hello, World!';
//     }
//   });
