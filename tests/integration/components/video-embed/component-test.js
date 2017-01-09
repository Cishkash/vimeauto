import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('video-embed', 'Integration | Component | video embed', {
  integration: true
});

test('Component renders', function(assert) {
  this.render(hbs`{{video-embed}}`);

  assert.ok(this.$(), 'This component just needs to render');
});
