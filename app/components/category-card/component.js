import Ember from 'ember';
const {inject} = Ember;

/**
 * Card component for every category returned from the categories endpoint
 *
 * @class Component.CategoryCard
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  // Services
  categoryService: inject.service('category'),

  /**
   * The category object passed in from the application model route.
   *
   * @property category
   * @type {Object}
   * @default null
   */
  category: null,

  actions: {
    addSubCategory(subCategory) {
      this.get('categoryService').addCategory(subCategory);
    }
  }
});
