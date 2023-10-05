// app/services/my-service.js
import Service from '@ember/service';

export default class GlobalVaraibleService extends Service {
  // Define a variable to be maintained across the app
  activeEmp = null;

  // Method to update the variable
  updateVariable(newValue) {
    this.set('activeEmp', newValue);
  }

  // Method to retrieve the variable
  getVariable() {
    return this.activeEmp;
  }
}
