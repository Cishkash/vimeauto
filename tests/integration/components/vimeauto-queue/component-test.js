import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vimeauto-queue', 'Integration | Component | vimeauto queue', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{vimeauto-queue}}`);

  console.log(this.$().text());

  assert.ok(this.$().text().includes('Your Vime(auto) playlist:'),
            'Renders the vimeauto label with no passed properties');
});
