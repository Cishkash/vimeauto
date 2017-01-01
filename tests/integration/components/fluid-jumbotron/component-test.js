import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fluid-jumbotron', 'Integration | Component | fluid jumbotron', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fluid-jumbotron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fluid-jumbotron}}
      template block text
    {{/fluid-jumbotron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
