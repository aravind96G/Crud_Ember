import { module, test } from 'qunit';
import { setupRenderingTest } from 'student-profile/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | loader-spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoaderSpinner />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <LoaderSpinner>
        template block text
      </LoaderSpinner>
    `);

    assert.dom().hasText('template block text');
  });
});
