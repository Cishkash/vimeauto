import Ember from 'ember';

/**
 * The video queue component. Lists all of the videos in a given category or
 * the vimeauto queue specifically.
 *
 * @class Component.VideoQueue
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  // Category service
  categoryService: Ember.inject.service('category'),

  /**
   * Model object from the route. Contains the video of the dynamic route and
   * its corresponding information.
   *
   * @property model
   * @type {Object}
   */
  model: null,
  /**
   * The individual selectedCategory from the category service.
   * @NOTE I realized a little too late that I don't actually need to do this
   *       since I've injected the categoryService already. Will refactor.
   * @property selectedCategory
   * @type {Object}
   */
  selectedCategory: null
});
