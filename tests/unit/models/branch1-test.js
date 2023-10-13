import { module, test } from 'qunit';

import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Model | branch1', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('branch1', {});
    assert.ok(model);
  });
});
