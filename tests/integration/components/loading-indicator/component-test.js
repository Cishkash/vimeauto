import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loading-indicator', 'Integration | Component | loading indicator', {
  integration: true
});

test('Loading indicator component render test', function(assert) {
  this.render(hbs`{{loading-indicator}}`);

  assert.ok(this.$('[data-test="loading-indicator"]').text().includes('Loading'),
            'Renders loading with no properties passed into component');
});
