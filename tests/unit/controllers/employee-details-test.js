import { module, test } from 'qunit';
import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Controller | employee-details', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:employee-details');
    assert.ok(controller);
  });
});
