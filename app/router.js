import EmberRouter from '@ember/routing/router';
import config from 'student-profile/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('student-list');
  // this.route('studentList', function () {
  //   this.route('child-route-1');
  // });
  // this.route('studentListAll', function () {
  //   // Child route for individual student details
  //   this.route('student', { path: '/student/:id' });
  // });
  this.route('route2');
  this.route('route3');
  this.route('student-list-all', function() {
    this.route('student', { path: '/:user_id' });
  });


  this.route('employee', { path: 'employee/:employee_id' });

  this.route('new-employee');
  this.route('about');
});
