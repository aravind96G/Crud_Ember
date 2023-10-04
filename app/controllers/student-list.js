import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentlistController extends Controller {
  @service router;

  @action
  goToEmployeeForm(){
   this.router.transitionTo('new-employee');
  }

  @action
  goToStudentListAllPage(){
    this.router.transitionTo('student-list-all');
  }

  
}

