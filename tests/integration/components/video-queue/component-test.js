import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('video-queue', 'Integration | Component | video queue', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{video-queue}}`);

  assert.ok(this.$().text().includes('Now Playing:'),
            'Component renders with now playing text');
});
