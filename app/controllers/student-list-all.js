import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StudentListAllController extends Controller {
    @service router;
    @service employee;

    @tracked selectedEmpId = null;

    init() {
        super.init();
        console.log('studentlistall page init')
    }

    @action
    async goToDetailView(empId){
        this.selectedEmpId = empId;
        this.router.transitionTo('student-list-all.student', empId);
    }

    @action
    editEmployee(empId, event) {
        event.preventDefault();
        event.stopPropagation(); // Prevent the event from reaching the parent tr element
        // Your edit logic here
        this.router.transitionTo('employee', empId);
    }

    @action
    goToEmployeeForm(){
        this.router.transitionTo('new-employee');
    }
}
