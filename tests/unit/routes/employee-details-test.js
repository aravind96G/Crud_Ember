import { module, test } from 'qunit';
import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Route | employee-details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:employee-details');
    assert.ok(route);
  });
});
