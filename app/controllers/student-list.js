import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentlistController extends Controller {
  @service router;
  @service employee;

  @action
  goToEmployeeForm(){
   this.router.transitionTo('new-employee');
  }

  @action
  goToStudentListAllPage(){
    this.router.transitionTo('student-list-all');
  }

  @action
  async deleteEmployee(id){
    console.log(id, 'empid')
    let response =  await this.employee.deleteEmployee(id);
    if(response === 'success'){
      console.log('deleted successfully');
    }
  }

  
}

