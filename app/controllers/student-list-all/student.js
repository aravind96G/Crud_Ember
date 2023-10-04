import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentController extends Controller {
  @service router;

  @action
  editEmployee(empId){
    console.log(empId, 'edited empid');
    this.router.transitionTo('employee', empId);
  }


  
}

