import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vimeauto-footer', 'Integration | Component | vimeauto footer', {
  integration: true
});

test('Footer component render test', function(assert) {
  this.render(hbs`{{vimeauto-footer}}`);

  assert.ok(this.$(), 'The footer component renders');
});
