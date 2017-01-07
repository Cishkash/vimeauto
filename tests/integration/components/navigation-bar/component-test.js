import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const selectedCategories = [
  {
    assignedColor: Ember.String.htmlSafe(`background-color: rgb(${255, 255, 255})`),
    name: "Some Video",
    uri: "/some/uri"
  }
];

let categoryServiceStub = Ember.Service.extend({
  selectedCategories: []
});


moduleForComponent('navigation-bar', 'Integration | Component | navigation bar', {
  integration: true,
  beforeEach() {
    this.register('service:category', categoryServiceStub);
    this.inject.service('category', { as: 'categoryService' });
  }
});

test('Data rendering tests', function(assert) {
  // No categories
  this.render(hbs`{{navigation-bar}}`);
  assert.ok(
    this.$('[data-test="navbar-queue-no-category"]').text().includes('You haven\'t added any categories yet!'),
    'Renders the proper name for the navbar-queue-no-category');

  // With categories
  this.set('categoryService.selectedCategories', selectedCategories);
  assert.ok(
    this.$('[data-test="navbar-queue-category-name"]').text().includes('Some Video'),
    'Renders the proper name for the navbar-queue-category-name');
  assert.ok(
    this.$('[data-test="navbar-queue-category-remove"]'),
    'Renders a category remove button');
});
