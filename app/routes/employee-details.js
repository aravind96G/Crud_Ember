import Route from '@ember/routing/route';

export default class EmployeeDetailsRoute extends Route {
    setupController(){
        console.log('emp-detail', 'controller setup in route')
    }
}
