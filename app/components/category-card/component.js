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
  category: inject.service()
});
