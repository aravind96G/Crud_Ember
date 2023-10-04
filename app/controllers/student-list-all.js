import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StudentListAllController extends Controller {
    @service router;
    @service employee;

    @action
    async goToDetailView(empId){
        console.log(empId);
        var emp = await this.employee.findEmployeeByEmpId(empId)
         console.log(emp);
        this.router.transitionTo('student-list-all.student', empId);
        // router.transitionTo('student-list-all/student', empId);
    }
  

}
