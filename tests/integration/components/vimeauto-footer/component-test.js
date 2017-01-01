import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vimeauto-footer', 'Integration | Component | vimeauto footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vimeauto-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vimeauto-footer}}
      template block text
    {{/vimeauto-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
