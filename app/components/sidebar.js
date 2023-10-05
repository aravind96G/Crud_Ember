import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class SidebarComponent extends Component {
    @service router;
    @service globalVaraible;

    @tracked activeTab;

    constructor() {
        super(...arguments);
        this.activeTab = this.globalVaraible.getVariable();
        if(!window.location.pathname || window.location.pathname === '/'){
         this.router.transitionTo('student-list');
        }
     }

     get currentRoute() {
        return this.router.currentRouteName;
      }
    
      @action
      isActive(routeName) {
        let route = this.currentRoute;
        if(this.currentRoute === 'student-list'){
            route = 'student-list';
        }else if(this.currentRoute === 'new-employee'){
            route = 'new-employee';
        }else if(this.currentRoute === 'student-list-all.index'){
            route = 'student-list';
        }else if(this.currentRoute === 'student-list-all.student'){
            route = 'student-list';
        }else if(this.currentRoute === 'employee'){
            route = 'student-list';
        }
        return route === routeName ? 'active' : '';
      }
}




