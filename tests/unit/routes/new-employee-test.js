import { module, test } from 'qunit';
import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Route | new-employee', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:new-employee');
    assert.ok(route);
  });
});
