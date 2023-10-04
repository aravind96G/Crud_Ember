import Component from '@glimmer/component';
import { inject as service } from '@ember/service';


export default class SidebarComponent extends Component {
    @service router;
    constructor() {
        console.log('sidebar comp')
        super(...arguments);
        if(!window.location.pathname || window.location.pathname === '/'){
         this.router.transitionTo('student-list');
        }
     }
}




