import { module, test } from 'qunit';
import { setupRenderingTest } from 'student-profile/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | employee-details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmployeeDetails />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EmployeeDetails>
        template block text
      </EmployeeDetails>
    `);

    assert.dom().hasText('template block text');
  });
});
