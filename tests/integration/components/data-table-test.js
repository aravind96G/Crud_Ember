import { module, test } from 'qunit';
import { setupRenderingTest } from 'student-profile/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DataTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DataTable>
        template block text
      </DataTable>
    `);

    assert.dom().hasText('template block text');
  });
});
