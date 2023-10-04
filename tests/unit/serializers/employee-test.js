import { module, test } from 'qunit';

import { setupTest } from 'student-profile/tests/helpers';

module('Unit | Serializer | employee', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('employee');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('employee', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
