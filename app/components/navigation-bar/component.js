import Ember from 'ember';
const {inject} = Ember;

/**
 * Navigation bar component.
 *
 * @class Component.NavigationBar
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  // Service injections
  categoryService: inject.service('category'),

  selectedCategories: []
});
