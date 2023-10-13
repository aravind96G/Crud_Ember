import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployeeRoute extends Route {
  @service store;
  @service employee;

  async model(params) {
    return await this.employee.findEmployeeByEmpId(
      parseInt(params.employee_id),
    );
  }
}
