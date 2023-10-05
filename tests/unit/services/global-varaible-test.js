import { module, test } from 'qunit';
import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Service | global-varaible', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:global-varaible');
    assert.ok(service);
  });
});
