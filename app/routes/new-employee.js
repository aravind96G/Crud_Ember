import Route from '@ember/routing/route';

export default class NewEmployeeRoute extends Route {
    setupController(){
        console.log('route controller for new emp creation')
        const controller = this.controllerFor('employee-details'); // Replace 'some-controller' with the actual name of your controller
        controller.set('isLoading', true);
    }
}
