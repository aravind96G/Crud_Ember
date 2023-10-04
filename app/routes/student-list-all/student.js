import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StudentListAllStudentRoute extends Route {
    @service router;
    @service employee;
    async model(params) {
        let a = await this.employee.findEmployeeByEmpId(parseInt(params.user_id));
        console.log(a)
        return await this.employee.findEmployeeByEmpId(parseInt(params.user_id))
    }
}
