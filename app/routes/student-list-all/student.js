import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StudentListAllStudentRoute extends Route {
    @service router;
    @service employee;

    resetController() {
        // Reset properties or perform cleanup when exiting the route
        const controller = this.controllerFor('student-list-all'); // Replace 'some-controller' with the actual name of your controller
        controller.set('selectedEmpId', null); // Reset the specific property to null
    }

    async model(params) {
        let a = await this.employee.findEmployeeByEmpId(parseInt(params.user_id));
        console.log(a)
        return await this.employee.findEmployeeByEmpId(parseInt(params.user_id))
    }


}
